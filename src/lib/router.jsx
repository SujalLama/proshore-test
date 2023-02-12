import { createBrowserRouter } from "react-router-dom";
import { getSingleRepoInfo } from "../api/repositories";
import { Single, Error, Search } from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
    errorElement: <Error />,
  },
  {
    path: "/:repo/:owner",
    element: <Single />,
    loader: getSingleRepoInfo,
  },
]);

export default router;
