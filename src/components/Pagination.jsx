import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { usePagination, DOTS } from "../hooks/usePagination";

function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="max-w-[39.25rem] mx-auto flex flex-col items-center justify-center px-5 md:px-8 text-sm py-10">
      <p>
        Search Results: <span className="font-bold">{totalCount}</span>
      </p>
      <ul className={`flex items-center justify-center mt-4 ${className}`}>
        {/* Left navigation arrow */}
        <li className="mr-2 md:mr-4 flex">
          <button
            className="w-6 h-6  disabled:cursor-not-allowed"
            onClick={onPrevious}
            disabled={currentPage === 1}
          >
            <GrFormPrevious size={20} />
          </button>
        </li>
        {paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li className="px-2 py-0.5 mr-1 md:mr-2" key={pageNumber}>
                &#8230;
              </li>
            );
          }

          // Render our Page Pills
          return (
            <li key={pageNumber} className="mr-1 md:mr-2">
              <button
                onClick={() => onPageChange(pageNumber)}
                className={`px-2 py-0.5 flex items-center justify-center rounded-sm hover:bg-gray-300 hover:text-black ${
                  pageNumber === currentPage ? "text-white bg-[#00203f]" : ""
                } `}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li className="flex ">
          <button
            className="ml-1 md:ml-2 w-6 h-6 disabled:cursor-not-allowed"
            onClick={onNext}
            disabled={currentPage === lastPage}
          >
            <GrFormNext size={20} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
