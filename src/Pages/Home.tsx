import CardView from "../Components/CardView";
import DatatableView from "../Components/DatatableView";
import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import FiltersComponent from "../Components/FiltersComponent";
import { Context } from "../App";
import { useContext } from "react";
import { filter_data, sort_data } from "../Utils/actions";
import Pagination from "../Components/Pagination";

export type callbackParams = {
  operation: "asc" | "desc";
  orderBy: string;
};

const defaultView = localStorage.getItem("selectedView") || "card";

function Home() {
  const context = useContext(Context);
  const [selectedView, setSelectedView] = useState<string>(defaultView);

  // because sorting is only setup by default for strings in javascript

  function sortData({ operation, orderBy }: callbackParams) {
    context.dispatch({
      type: sort_data,
      payload: {
        operation,
        orderBy,
      },
    });
  }

  return (
    <div className=" min-h-screen">
      <div className="max-w-[1300px] mx-auto px-10">
        <Header selectedView={selectedView} setSelectedView={setSelectedView} />
        <FiltersComponent state={context.state} dispatch={context.dispatch} />
        {selectedView === "card" ? (
          <CardView data={context.state.paginatedData} sortData={sortData} />
        ) : (
          <DatatableView
            data={context.state.paginatedData}
            sortData={sortData}
          />
        )}
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
