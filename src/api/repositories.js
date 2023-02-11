import { AxiosGitHub } from "../lib/Axios";

export async function searchRepositories(query, order, sort, page_number) {
  const per_page = 2;
  const { data } = await AxiosGitHub.get(
    `/search/repositories?q=${query}&sort=${sort}&order=${order}&per_page=${per_page}&page=${page_number}`
  );
  return data;
}
