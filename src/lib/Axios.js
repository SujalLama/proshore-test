import axios from "axios";

const GitHubURL = process.env.REACT_APP_GITHUB_API_URL;

const AxiosGitHub = axios.create({
  baseURL: GitHubURL,
  timeout: 2000,
  Accept: "application/vnd.github+json",
});

export default AxiosGitHub;
