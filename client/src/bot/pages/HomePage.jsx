import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
            Proud to introduce
          </p>

          <h4 className="mb-8 text-medium font-bold text-black sm:text-2xl md:mb-12 md:text-3xl">
            Educational Excellence Starts Here: Join the Student Management
            Revolution
          </h4>

          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Link
              to="/chat-page"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Enroll Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
