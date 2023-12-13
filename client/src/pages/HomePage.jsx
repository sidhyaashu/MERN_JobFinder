import React from 'react'
import {
  Outlet,
  Navigate,
  Route,
  Routes,
  useLocation,
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import {
  About,
  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./index";
import { useSelector } from "react-redux";
import { Footer, Navbar } from "../components";


const HomePage = () => {

    const location = useLocation();
    const user = useSelector((state) => state.user?.user);
    let current = location?.pathname;
    const hideNavBar = current === "/user-auth";
    const navigate = useNavigate();


  return (
    <main className="bg-[#f7fdfd]">
      {!hideNavBar && <Navbar />}
        {Outlet}
      {user && <Footer />}
    </main>
  );
}

export default HomePage
