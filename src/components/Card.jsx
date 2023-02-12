import { AiOutlineEye } from "react-icons/ai";
import { RiStarSLine } from "react-icons/ri";
import { BiGitRepoForked } from "react-icons/bi";
import { Link } from "react-router-dom";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Card({ result, date }) {
  return (
    <Link
      to={`${result.name}/${result.owner.login}`}
      className="border-[1px] border-gray-200 p-4 rounded-lg text-white bg-[#00203f] hover:bg-[#04305c] flex flex-col justify-between"
    >
      <h2 className="font-bold text-xl mb-4 ">{result.name}</h2>

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

      <p className="my-4">{result.description}</p>

      <div>
        <div className="flex items-center">
          <span className="w-1/2">Author :</span>
          <span>{result.owner.login}</span>
        </div>

        <div className="flex items-center">
          <span className="w-1/2">Last Updated :</span>
          <span>
            {`${months[date.getMonth()]} 
                            ${date.getDay()},
                            ${date.getFullYear()}`}
          </span>
        </div>
      </div>
    </Link>
  );
}
