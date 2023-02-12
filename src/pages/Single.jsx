import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";

function Single() {
  const data = useLoaderData();
  console.log(data);

  if (!data) {
    return null;
  }

  return (
    <>
      <Banner title={data?.full_name} />
      <section className="max-w-[50rem] px-5 md:px-8 mx-auto py-10">
        <div className="border-[1px] border-gray-200 bg-black text-white rounded-lg flex flex-col md:flex-row items-center ">
          <div className="w-full md:w-[calc(30%_-2rem)] md:mr-8 h-[12rem] md:h-full overflow-hidden rounded-tl-lg rounded-bl-lg">
            <img
              className="w-full h-full object-cover"
              src={data?.owner?.avatar_url}
              alt={data?.owner?.login}
            />
          </div>
          <div className="p-4 md:p-0 mt-8 md:mt-0 md:w-1/2 flex flex-col justify-center text-sm">
            <div>
              <span>Owner : </span>
              <a
                href={data?.owner?.html_url}
                rel="noreferrer"
                target="_blank"
                className="text-blue-400 underline hover:no-underline"
              >
                {data?.owner?.login}
              </a>
            </div>
            <div>
              <span>Repo : </span>
              <a
                href={data?.html_url}
                rel="noreferrer"
                target="_blank"
                className="text-blue-400 underline hover:no-underline"
              >
                {data?.name}
              </a>
            </div>
            <div>
              <span>Open Issues : </span>
              <span>{data?.open_issues_count}</span>
            </div>
            <div>
              <span>Default Branch : </span>
              <span>{data?.default_branch}</span>
            </div>
            <div>
              <span>Language : </span>
              <span>{data?.language}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Single;
