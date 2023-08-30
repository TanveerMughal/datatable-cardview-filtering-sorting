import React from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { callbackParams } from "../Pages/Home";
import { tableHeadTitles } from "../Utils/constants";

type SortingComponentForCardViewProps = {
  sortData: ({}: callbackParams) => void;
};

function SortingComponentForCardView({
  sortData,
}: SortingComponentForCardViewProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 py-6">
      {tableHeadTitles.map((item) => {
        const { title, title_key } = item;

        return (
          <div key={title} className="">
            {" "}
            {title === "Image" ? null : (
              <SingleFilter
                title={title}
                title_key={title_key}
                callback={sortData}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

type SingleFilterProps = {
  title: string;
  title_key: string;
  callback: ({}: callbackParams) => void;
};

function SingleFilter({ title, title_key, callback }: SingleFilterProps) {
  return (
    <button
      className={`flex gap-2 justify-center bg-gray-300 px-3 py-2 rounded-md`}
    >
      <p>{title}</p>
      <span className={`flex flex-col items-center`}>
        <BiSolidUpArrow
          className="cursor-pointer hover:text-white"
          onClick={() => callback({ operation: "asc", orderBy: title_key })}
        />
        <BiSolidDownArrow
          className="cursor-pointer hover:text-white"
          onClick={() => callback({ operation: "desc", orderBy: title_key })}
        />
      </span>
    </button>
  );
}

export default SortingComponentForCardView;
