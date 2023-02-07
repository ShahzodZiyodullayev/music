import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Favourites = lazy(() => import("../pages/Favourites"));

const MainRoutes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "favourites", element: <Favourites /> },
    ],
  },
];

export default MainRoutes;
