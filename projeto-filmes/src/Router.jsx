import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import Search from "./components/pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "movie/:movieId", element: <Movie /> },
      { path: "search", element: <Search /> },
    ],
  },
]);

export default router;
