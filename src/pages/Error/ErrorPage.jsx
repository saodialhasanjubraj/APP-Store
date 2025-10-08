import React from "react";

export const ErrorPage = () => {
  return (
    <div className="  flex flex-col items-center justify-center h-[100vh]">
      <img
        src="src/assets/error-404.png"
        alt=""
        srcset=""
        className="h-100 w-170"
      />
      <h1 className="text-5xl font-bold mt-5 text-red-500">Oops, page not found!</h1>
      <h3 className="text-xl font-semibold mt-5">
        The page you are looking for is not available.
      </h3>
      <a
        href="https://github.com/saodialhasanjubraj?tab=repositories"
        className="btn bg-gradient-to-b from-[#632EE3] to-[#9F62F2] px-5 rounded-2xl mt-3 py-6 text-xl flex items-center justify-center gap-x-6"
      >
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-filled/50/home.png"
          alt="home"
        />
        <h1>Back to Home</h1>
      </a>
    </div>
  );
};
