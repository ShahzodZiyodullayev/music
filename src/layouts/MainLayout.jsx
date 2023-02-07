import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import Header from "./Header";
import PermanentDrawerLeft from "./PermanentDrawerLeft";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <PermanentDrawerLeft />
    </>
  );
};

export default MainLayout;
