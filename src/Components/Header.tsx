import { HiOutlineTableCells } from "react-icons/hi2";
import { HiOutlineViewGrid } from "react-icons/hi";

type HeaderProps = {
  selectedView: string;
  setSelectedView: React.Dispatch<React.SetStateAction<string>>;
};

export function Header({ setSelectedView }: HeaderProps) {
  function setView(view: "card" | "datatable") {
    localStorage.setItem("selectedView", view);
    setSelectedView(view);
  }
  return (
    <header className="pt-[5rem]">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Tanveer Ahmed Mughal</h1>
        <p className="text-xl mt-3">Phone # 0336-5359024</p>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <button onClick={() => setView("datatable")}>
          <HiOutlineTableCells className="text-4xl" />
        </button>
        -
        <button onClick={() => setView("card")}>
          <HiOutlineViewGrid className="text-4xl " />
        </button>
      </div>
    </header>
  );
}
