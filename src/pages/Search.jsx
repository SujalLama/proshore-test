import { useEffect, useState } from "react";
import { searchRepositories } from "../api/repositories";
import { filterLists, orderLists } from "../data/constants";
import Banner from "../components/Banner";
import SearchForm from "../components/Search/SearchForm";
import SearchResult from "../components/Search/SearchResult";

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

    if (!search) {
      setError("Search Field should not be empty.");
      return null;
    }

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
    <main className="overflow-x-hidden">
      <Banner title="Explore Github Repo" />

      {/* Search Form */}
      <SearchForm
        submitForm={submitForm}
        search={search}
        setSearch={setSearch}
        filter={filter}
        filterLists={filterLists}
        setFilter={setFilter}
        order={order}
        orderLists={orderLists}
        setOrder={setOrder}
      />

      {/* Search Results */}
      <div className="py-10 px-5 md:px-8 max-w-[60rem] 2xl:max-w-[80rem] mx-auto min-h-[10rem]">
        <SearchResult
          loading={loading}
          error={error}
          results={results}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
}
