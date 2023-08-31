import { DataType } from "../Api/data";
import {
  filter_data,
  load_data,
  paginate_data,
  sort_data,
  update_checked,
  update_filters,
} from "../Utils/actions";
import { customSort } from "../Utils/helpers";

export type State = {
  data: DataType[] | [];
  filteredData: DataType[] | [];
  filters: {
    minPrice: number;
    maxPrice: number;
    search_query: string;
  };
  page: number;
  paginatedData: DataType[] | [];
  noOfPages: number;
  checked: boolean;
};

export const initialState: State = {
  data: [],
  filteredData: [],
  filters: {
    minPrice: 0,
    maxPrice: 1_000_000,
    search_query: "",
  },
  page: 1,
  paginatedData: [],
  noOfPages: 0,
  checked: false,
};

type Action = {
  type: string;
  payload?: any;
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    //  ************************************************************************************** load_data
    case load_data:
      return {
        ...state,
        data: action?.payload?.data || [],
        filteredData: action?.payload?.data || [],
        noOfPages: Math.ceil((action?.payload?.data || []).length / 10),
      };

    //  ************************************************************************************** paginate_data
    case paginate_data:
      const { page } = action.payload;
      const start = (page - 1) * 10;
      const end = page * 10;
      const tempPaginatedData = state.filteredData.slice(start, end);
      const noOfPages = Math.ceil(state.filteredData.length / 10);

      return { ...state, page, paginatedData: tempPaginatedData, noOfPages };

    //  ************************************************************************************** sort_data

    case sort_data:
      let tempData = [...state.data];

      if (
        ["price", "coveredAreaSQFT", "beds", "bath", "isCommercial"].includes(
          action?.payload?.orderBy || ""
        )
      ) {
        if (action.payload.operation === "asc") {
          tempData.sort(
            (a: any, b: any) =>
              a[action?.payload?.orderBy || "title"] -
              b[action?.payload?.orderBy || "title"]
          );
        } else {
          tempData.sort(
            (a: any, b: any) =>
              b[action?.payload?.orderBy || "title"] -
              a[action?.payload?.orderBy || "title"]
          );
        }
      } else {
        if (action.payload.operation === "asc") {
          tempData.sort((a: any, b: any) =>
            customSort(
              a[action?.payload?.orderBy || "title"],
              b[action?.payload?.orderBy || "title"]
            )
          );
        } else {
          tempData.sort((a: any, b: any) =>
            customSort(
              b[action?.payload?.orderBy || "title"],
              a[action?.payload?.orderBy || "title"]
            )
          );
        }
      }
      return { ...state, data: tempData };

    //  ************************************************************************************** update_filters

    case update_filters:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action?.payload?.value,
        },
      };

    //  ************************************************************************************** filter_data
    case filter_data:
      let tempFilteredData = [...state.data];
      const { minPrice, maxPrice, search_query } = state.filters;

      if (search_query) {
        // filter by search query

        tempFilteredData = tempFilteredData.filter((item) =>
          item.title.toLowerCase().includes(search_query.toLowerCase())
        );
      }

      // filter by price
      tempFilteredData = tempFilteredData.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );

      return { ...state, filteredData: tempFilteredData };

    // ************************************************************************************** update_checked

    case update_checked:
      const isChecked = action.payload;

      return { ...state, checked: isChecked };

    default:
      return state;
  }
}
