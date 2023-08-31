import { HiOutlineTableCells } from "react-icons/hi2";
import { HiOutlineViewGrid } from "react-icons/hi";
import { useState } from "react";

type HeaderProps = {
  selectedView: string;
  setSelectedView: React.Dispatch<React.SetStateAction<string>>;
};

export function Header({ setSelectedView }: HeaderProps) {
  const [showAlert, setShowAlert] = useState(false);
  function setView(view: "card" | "datatable") {
    localStorage.setItem("selectedView", view);
    setSelectedView(view);
  }

  function handleCopyToClipboard() {
    try {
      navigator.clipboard.writeText("0336-5359024");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      alert("Error copying to clipboard");
    }
  }

  return (
    <header className="pt-[5rem]">
      {showAlert && (
        <div
          className="absolute top-5 left-1/2 -translate-x-1/2 bg-black px-3 rounded-md"
          id="alert"
        >
          <p className="text-white">Copied to clipboard</p>
        </div>
      )}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Tanveer Ahmed Mughal</h1>
        <h2 className="text-xl font-semibold">MERN Stack Developer</h2>
        <p
          className="text-xl mt-3 cursor-pointer"
          onClick={handleCopyToClipboard}
          title="Click to copy to clipboard"
        >
          Phone # 0336-5359024
        </p>
      </div>
      <div className="flex items-center justify-center gap-1 mt-2">
        <button
          onClick={() => setView("datatable")}
          className="bg-gray-500 hover:bg-gray-200 px-3 rounded-l-lg transition-all group"
          title="Table View"
        >
          <HiOutlineTableCells className="text-4xl text-white group-hover:text-black" />
        </button>
        <button
          onClick={() => setView("card")}
          className="bg-gray-500 hover:bg-gray-200 px-3 rounded-r-lg transition-all group"
          title="Card View"
        >
          <HiOutlineViewGrid className="text-4xl text-white group-hover:text-black" />
        </button>
      </div>
    </header>
  );
}

// Q: write me a class for adding
