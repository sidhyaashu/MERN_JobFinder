import {
  Outlet,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";

import { Footer, Navbar } from "./components";
import {
  About,
  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./pages";
import { useSelector } from "react-redux";

// function Layout() {
//   const user = useSelector((state) => state.user?.user);
//   const location = useLocation();

//   return user?.token ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/user-auth" state={{ from: location }} replace />
//   );
// }

function App() {
  const location = useLocation()
  const user = useSelector((state) => state.user?.user);
  let current = location?.pathname
  const hideNavBar = current === "/user-auth"
  const navigate = useNavigate()


  return (
    <main className="bg-[#f7fdfd]">
      {/* {!hideNavBar && <Navbar />} */}
      {user?.token && <Navbar />}


      <Routes>
        <Route path="/" element={user?.token ? <FindJobs /> : <AuthPage />} />
        <Route
          path="/find-jobs"
          element={user?.token ? <FindJobs /> : <AuthPage />}
        />
        <Route path="/companies" element={<Companies />} />
        <Route
          path={
            user?.accountType === "seeker"
              ? "/user-profile"
              : "/user-profile/:id"
          }
          element={user?.token ? <UserProfile /> : <AuthPage />}
        />

        <Route path={"/company-profile"} element={<CompanyProfile />} />
        <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
        <Route path={"/upload-job"} element={<UploadJob />} />
        <Route path={"/job-detail/:id"} element={<JobDetail />} />

        <Route path="/about-us" element={<About />} />
        <Route path="/user-auth" element={<AuthPage />} />
      </Routes>
      {user && user?.token && <Footer />}
    </main>
  );
}

export default App;
