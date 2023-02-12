import { AxiosGitHub } from "../lib/Axios";

export async function searchRepositories(searchParam) {
  try {
    const { query, order = "asc", sort = "", pageNumber = 1 } = searchParam;

    const perPage = 12;

    if (!query) {
      return [];
    }

    let newSort = sort;

    if (sort === "best-match") {
      newSort = "";
    }

    const { data } = await AxiosGitHub.get(
      `/search/repositories?q=${query}&sort=${newSort}&order=${order}&per_page=${perPage}&page=${pageNumber}`
    );

    if (data) {
      return data;
    }

    return [];
  } catch (error) {
    console.log(error);
    return { error: error?.message };
  }
}

export async function getSingleRepoInfo({ params }) {
  try {
    const { data } = await AxiosGitHub.get(
      `/repos/${params.owner}/${params.repo}`
    );

    if (data) {
      return data;
    }

    return null;
  } catch (error) {
    console.log(error);
    return { error: error?.message };
  }
}
