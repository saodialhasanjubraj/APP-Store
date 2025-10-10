import React from "react";
import errorpageImage from "../PageNot Found/App-Error.png";
import { Link } from "react-router";
const PageNotFound = () => {
  return (
    <div className="flex h-[full] w-[full] items-center justify-center flex-col">
      <img src={errorpageImage} alt="" srcset="" className="h-80 w-150 my-10" />
      <h1 className="text-3xl font-semibold mb-5">OPPS!! APP NOT FOUND</h1>
      <h1 className="mb-5">
        The App you are requesting is not found on our system. please try
        another apps
      </h1>
      <Link to="/appsComponent">
        <button className="btn btn-neutral text-white bg-gradient-to-b from-[#632EE3] to-[#9F62F2] border-none px-10">
          Go Back!
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
