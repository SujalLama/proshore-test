import { createBrowserRouter } from "react-router-dom";
import { RootLayout, Single, Error, Home } from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/repositories/:repoId", element: <Single /> },
    ],
  },
]);

export default router;
