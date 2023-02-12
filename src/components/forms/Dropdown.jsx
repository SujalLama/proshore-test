import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

function Dropdown({
  lists = [],
  selected = "",
  setSelected = "",
  className = "",
}) {
  const [showDrop, setShowDrop] = useState(false);

  if (lists.length === 0) {
    return null;
  }

  function selectItem(key) {
    setSelected(key);
    setShowDrop(false);
  }

  return (
    <div
      className={`relative text-sm font-semibold h-full flex items-center w-[200px] rounded-sm  bg-gray-100  justify-center ${className}`}
    >
      {selected && (
        <button
          onClick={() => setShowDrop(!showDrop)}
          type="button"
          className="flex items-center justify-between w-full h-full py-2 px-4"
        >
          <span className="mr-2">
            {lists.filter((item) => item.key === selected)[0].name}
          </span>
          <MdArrowDropDown size={20} />
        </button>
      )}

      <ul
        className={`absolute text-gray-600 py-2 z-50 shadow-[0px_8px_20px_rgb(0_0_0_/_6%)] font-normal border-[1px] border-gray-200  rounded-[8px] bg-white left-0 top-10 w-full ${
          showDrop ? "block" : "hidden"
        }`}
      >
        {lists.map((item) => {
          return (
            <li key={item.key}>
              <button
                type="button"
                key={item.key}
                onClick={() => selectItem(item.key)}
                className="w-full py-1.5 px-2  break-words hover:bg-gray-100"
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
