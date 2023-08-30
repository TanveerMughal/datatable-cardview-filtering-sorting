// impsort React from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { callbackParams } from "../Pages/Home";

type TableHeaderProps = {
  title: string;
  title_key: string;
  callback: (operation: callbackParams) => void;
  className?: string;
  controls?: boolean;
};

function TableHeader({
  title,
  title_key,
  callback,
  className,
  controls = true,
}: TableHeaderProps) {
  return (
    <div className={`flex gap-2 justify-center ${className}`}>
      <p>{title}</p>
      <span className={`flex flex-col items-center ${!controls && "hidden"}`}>
        <BiSolidUpArrow
          className="cursor-pointer"
          onClick={() => callback({ operation: "asc", orderBy: title_key })}
        />
        <BiSolidDownArrow
          className="cursor-pointer"
          onClick={() => callback({ operation: "desc", orderBy: title_key })}
        />
      </span>
    </div>
  );
}

export default TableHeader;
