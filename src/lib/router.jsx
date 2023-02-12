import { createBrowserRouter } from "react-router-dom";
import { getSingleRepoInfo } from "../api/repositories";
import { RootLayout, Single, Error, Home } from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/:repo/:owner",
        element: <Single />,
        loader: getSingleRepoInfo,
      },
    ],
  },
]);

export default router;
