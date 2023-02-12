import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from "../forms/Dropdown";
import Input from "../forms/Input";

function SearchForm({
  submitForm,
  search,
  setSearch,
  filter,
  setFilter,
  filterLists,
  order,
  setOrder,
  orderLists,
}) {
  return (
    <div className="max-w-[39.25rem] px-5 md:px-8 mx-auto h-full -mt-8 relative z-10">
      <form
        className="w-full border-[1px] border-gray-200 shadow-[0px_8px_20px_rgb(0_0_0_/_6%)] bg-white rounded-lg  p-4"
        onSubmit={submitForm}
      >
        <div className="flex items-center w-full mb-4 h-12">
          <Input
            type="text"
            className="w-full border-[1px] border-gray-200 rounded-tl-lg rounded-bl-lg"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#00203f] hover:bg-[#04305c] text-white h-full w-20 rounded-tr-lg rounded-br-lg flex items-center justify-center"
          >
            <AiOutlineSearch size={20} />
          </button>
        </div>

        <div className="flex items-center  md:justify-center w-full ">
          <div className="flex items-center justify-between w-full md:max-w-[18rem] flex-col md:flex-row">
            <Dropdown
              selected={filter}
              setSelected={setFilter}
              lists={filterLists}
              className="mb-2 md:mr-2 md:mb-0"
            />

            <Dropdown
              selected={order}
              setSelected={setOrder}
              lists={orderLists}
              className=""
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
