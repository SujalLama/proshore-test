import { AiOutlineEye } from "react-icons/ai";
import { RiStarSLine } from "react-icons/ri";
import { BiGitRepoForked } from "react-icons/bi";
import { Link } from "react-router-dom";
import { months } from "../data/constants";

export default function Card({ result, date }) {
  if (!result?.name && !result?.owner?.login) {
    return null;
  }

  return (
    <Link
      to={`${result.name}/${result.owner.login}`}
      className="border-[1px] border-gray-300 group rounded-lg "
    >
      <div className="rounded-t-lg p-4 text-white bg-[#00203f] group-hover:bg-[#04305c]">
        {result?.name && (
          <h2 className="font-bold text-xl mb-4 break-words ">{result.name}</h2>
        )}

        <div>
          <div className="flex items-center">
            <RiStarSLine />
            <span className="ml-4">{result.stargazers_count} stars</span>
          </div>

          <div className="flex items-center">
            <AiOutlineEye />
            <span className="ml-4">{result.watchers_count} watching</span>
          </div>

          <div className="flex items-center">
            <BiGitRepoForked />
            <span className="ml-4">{result.forks_count} forks</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-2">
        {result?.description && (
          <p className="pb-4 mb-4 border-b-[1px] border-gray-200">
            {result.description.slice(0, 150)}
          </p>
        )}

        <div className="mt-4">
          {result?.owner?.login && (
            <div className="flex items-center">
              <span className="w-1/2">Author :</span>
              <span className="font-bold">{result.owner.login}</span>
            </div>
          )}

          {date && (
            <div className="flex items-center mt-2">
              <span className="w-1/2">Last Updated :</span>
              <span className="font-bold">
                {`${months[date.getMonth()]} 
                            ${date.getDay()},
                            ${date.getFullYear()}`}
              </span>
            </div>
          )}
        </div>
      </div>
      <NewCard />
    </Link>
  );
}
