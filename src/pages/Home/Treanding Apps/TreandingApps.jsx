import React from "react";
import { Link } from "react-router";
import CardComponent from "../../../components/Card Component/CardComponent";

const TreandingApps = ({ data }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl mt-10 mb-5">Trending Apps</h1>
      <p>Explore All Trending Apps on the Market developed by us</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-x-auto mx-auto gap-y-3 mt-10">
        {data.map((card) => (
          <CardComponent card={card} />
        ))}
      </div>

      <Link to="/appsComponent">
        <button className="btn bg-gradient-to-b from-[#632EE3] to-[#9F62F2] mt-10 h-12 w-40">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default TreandingApps;
