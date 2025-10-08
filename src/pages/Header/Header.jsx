import { ArrowBigDown } from "lucide";
import React from "react";
import { Link } from "react-router";

export const Header = () => {
  const links = (
    <div className="flex lg:flex-row flex-col lg:gap-x-5 gap-x-0 lg:gap-y-0 gap-y-4 text-[20px]">
      <Link to="/">Home</Link>
      <Link to="/appsComponent">Apps</Link>
      <Link to="/installApps">Installation</Link>
    </div>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src="src/assets/logo.png" alt="" srcset="" className="h-8 w-8" />
          <h1 className="font-gradient-to-b from-[#632EE3] to-[#9F62F2]">
            Hero UI
          </h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/saodialhasanjubraj?tab=repositories"
          className="btn bg-gradient-to-b from-[#632EE3] to-[#9F62F2]"
        >
          <img src="GitHubLogo.png" alt="" srcset="" />
          <h1>Contribute</h1>
        </a>
      </div>
    </div>
  );
};
