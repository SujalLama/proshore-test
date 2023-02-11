import { createBrowserRouter } from "react-router-dom";
import { RootLayout, Single, Error, Index } from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/:pageId", element: <Index /> },
      { path: "/repositories/:repoId", element: <Single /> },
    ],
  },
]);

export default router;
