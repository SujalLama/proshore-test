import { useLoaderData, useNavigate } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";
import { months } from "../data/constants";

function Single() {
  const data = useLoaderData();

  const navigate = useNavigate();

  const date = new Date(data?.created_at);

  if (!data) {
    return null;
  }

  return (
    <section className="w-full md:h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-[40%] h-[12rem] md:h-full overflow-hidden relative">
        {data?.owner?.avatar_url ? (
          <img
            className="w-full h-full object-cover"
            src={data?.owner?.avatar_url}
            alt={data?.owner?.login}
          />
        ) : (
          <img
            className="w-full h-full object-cover"
            src="/images/github-hero.webp"
            alt={data?.owner?.login}
          />
        )}

        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 md:top-8 left-4 md:left-8 h-10 w-10 z-20 bg-white hover:bg-gray-200 flex justify-center items-center"
        >
          <GrLinkPrevious size={24} />
        </button>
      </div>

      <div className="p-4 md:py-8 md:px-12  md:w-[60%] flex flex-col  text-sm bg-gray-200">
        <div className="w-full xl:w-[80%]">
          {data?.name && (
            <h1 className="text-[2rem] md:text-[3rem] leading-[2.375rem] md:leading-[3.5rem] font-bold break-words">
              {data?.name}
            </h1>
          )}
          {data?.description && (
            <p className="mt-4 mb-6">{data?.description}</p>
          )}
          <div className="flex flex-col md:flex-row mt-8">
            {data?.owner?.login && (
              <div className="flex flex-col w-[calc(50%_-_1rem)] pr-4">
                <span className="font-bold text-sm md:text-base">Owner</span>
                <a
                  href={data?.owner?.html_url}
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-400 underline hover:no-underline"
                >
                  {data?.owner?.login}
                </a>
              </div>
            )}

            {data?.html_url && (
              <div className="flex flex-col w-[calc(50%_-_1rem)] mt-4 md:mt-0">
                <span className="font-bold text-sm md:text-base">Repo</span>
                <a
                  href={data?.html_url}
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-400 underline hover:no-underline"
                >
                  {data?.full_name}
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row mt-8">
            <div className="flex flex-col w-[calc(50%_-_1rem)] pr-4">
              <span className="font-bold text-sm md:text-base">
                Open Issues
              </span>
              <span>{data?.open_issues_count}</span>
            </div>

            {data?.default_branch && (
              <div className="flex flex-col w-[calc(50%_-_1rem)] mt-4 md:mt-0">
                <span className="font-bold text-sm md:text-base">
                  Default Branch
                </span>
                <span>{data?.default_branch}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row mt-8">
            {data?.language && (
              <div className="flex flex-col w-[calc(50%_-_1rem)] pr-4">
                <span className="font-bold text-sm md:text-base">Language</span>
                <span>{data?.language}</span>
              </div>
            )}

            {date && (
              <div className="flex flex-col w-[calc(50%_-_1rem)] mt-4 md:mt-0">
                <span className="font-bold text-sm md:text-base">
                  Created At
                </span>
                <span>{`${months[date.getMonth()]} 
                            ${date.getDay()},
                            ${date.getFullYear()}`}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Single;
