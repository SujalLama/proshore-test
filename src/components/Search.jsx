import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { searchRepositories } from "../api/repositories";
import Dropdown from "./forms/Dropdown";
import Input from "./forms/Input";
import Card from "./Card";
import Pagination from "./Pagination";
import { filterLists, orderLists } from "../data/constants";

export default function Search() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("stars");
  const [order, setOrder] = useState("desc");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const submitForm = async (e) => {
    e?.preventDefault();

    setLoading(true);
    setError(null);

    const data = await searchRepositories({
      query: search,
      order,
      sort: filter,
      page: currentPage,
    });

    if (data?.error) {
      setError(data?.error);
      setResults(null);
    } else {
      setResults(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (search) {
      submitForm();
    }
  }, [currentPage, order, filter]);

  return (
    <>
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

      {/* Search Results */}
      <div className="py-10 px-5 md:px-8 max-w-[60rem] 2xl:max-w-[80rem] mx-auto">
        {!results && (
          <p className="text-center text-2xl font-bold">Keep searching!</p>
        )}
        <div>
          {loading ? (
            <p className="text-center text-2xl font-bold">Loading...</p>
          ) : (
            results?.items?.length > 0 && (
              <>
                <div className="grid gap-[36px] grid-cols-[repeat(auto-fill,minmax(270px,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(336px,1fr))] text-sm">
                  {results?.items.map((result) => {
                    const date = new Date(result.updated_at);

                    return <Card key={result.id} result={result} date={date} />;
                  })}
                </div>
                <Pagination
                  className=""
                  currentPage={currentPage}
                  totalCount={results?.total_count}
                  pageSize={12}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </>
            )
          )}

          {error && <p className="text-center text-2xl font-bold">{error}</p>}
        </div>
      </div>
    </>
  );
}
