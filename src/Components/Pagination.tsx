import { useContext } from "react";
import { paginate_data } from "../Utils/actions";
import { Context } from "../App";

function Pagination() {
  const context = useContext(Context);

  const noOfPages = new Array(context?.state?.noOfPages).fill(0);
  return (
    <div className="flex justify-center py-6">
      {noOfPages.map((_, index) => (
        <div
          key={index}
          className={`flex items-center justify-center w-10 h-10 border border-gray-400 cursor-pointer ${
            context?.state?.page === index + 1 && "bg-gray-400 text-white"
          }`}
          onClick={() =>
            context?.dispatch({
              type: paginate_data,
              payload: { page: index + 1 },
            })
          }
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default Pagination;
