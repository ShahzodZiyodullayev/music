import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import Header from "./Header";
import Drawer from "./Drawer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Drawer />
    </>
  );
};

export default MainLayout;
