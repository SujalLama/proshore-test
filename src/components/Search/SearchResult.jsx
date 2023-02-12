import Pagination from "../Pagination";
import Card from "../Card";

function SearchResult({
  loading,
  error,
  results,
  currentPage,
  setCurrentPage,
}) {
  if (loading) {
    return <p className="text-center text-2xl font-bold">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl font-bold">{error}</p>;
  }

  if (results?.items?.length > 0) {
    return (
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
    );
  }
  return <p className="text-center text-2xl font-bold">Keep Searching!</p>;
}

export default SearchResult;
