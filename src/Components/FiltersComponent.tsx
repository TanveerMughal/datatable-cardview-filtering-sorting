import React from "react";
import { State } from "../Reducer/reducer";
import { update_filters } from "../Utils/actions";

type FiltersComponentProps = {
  state: State;
  dispatch: React.Dispatch<any>;
};

function FiltersComponent({ state, dispatch }: FiltersComponentProps) {
  return (
    <div className="flex flex-col w-full justify-center items-center py-6">
      <div className="w-1/2 flex items-center">
        <label
          htmlFor="search_query"
          className="border-black border-l border-t border-b px-3 py-2 "
        >
          <span className="text-gray-700 font-bold">Search Name</span>
        </label>
        <input
          type="text"
          name="search_query"
          id="search_query"
          className="block border border-black grow px-3 py-2"
          value={state?.filters?.search_query}
          onChange={(e) =>
            dispatch({
              type: update_filters,
              payload: {
                name: "search_query",
                value: e.target.value,
              },
            })
          }
        />
      </div>
      <div className="w-1/2 py-6 flex justify-center items-center gap-3">
        <label htmlFor="minPrice">Min. Price</label>
        <input
          type="range"
          name="minPrice"
          id="minPrice"
          min={0}
          max={1_000_000}
          value={state?.filters?.minPrice}
          onChange={(e) =>
            dispatch({
              type: update_filters,
              payload: {
                name: "minPrice",
                value: Number(e.target.value),
              },
            })
          }
        />
        <p>{state?.filters?.minPrice}</p>
      </div>
      <div className="w-1/2 py-6 flex justify-center items-center gap-3">
        <label htmlFor="maxPrice">Max. Price</label>
        <input
          type="range"
          name="maxPrice"
          id="maxPrice"
          min={0}
          max={1_000_000}
          value={state?.filters?.maxPrice}
          onChange={(e) =>
            dispatch({
              type: update_filters,
              payload: {
                name: "maxPrice",
                value: Number(e.target.value),
              },
            })
          }
        />
        <p>{state?.filters?.maxPrice}</p>
      </div>
    </div>
  );
}

export default FiltersComponent;
