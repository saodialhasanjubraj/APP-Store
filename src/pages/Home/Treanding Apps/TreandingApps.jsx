import React from "react";

const TreandingApps = ({ data }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl mt-10 mb-5">Trending Apps</h1>
      <p>Explore All Trending Apps on the Market developed by us</p>
      <div className="grid grid-cols-4 w-full gap-x-auto mx-auto gap-y-3 mt-10">
        {data.map((card) => (
          <div className="w-[285px] h-auto py-10 flex items-center flex-col bg-white shadow-2xl text-black px-5 rounded-2xl">
            <img src={card.image} alt="" srcset="" className="h-30 w-35" />
            <h1 className="font-bold mt-5">{card.title}</h1>
            <div className="downloadRatingBtns flex items-center justify-between w-full mt-5">
              <div className="download flex gap-x-3 text-green-500">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/download--v1.png"
                  alt="download--v1"
                />
                {card.downloads >= 1000000
                  ? (card.downloads / 1000000).toFixed(1) + "M"
                  : card.downloads >= 1000
                  ? (card.downloads / 1000).toFixed(1) + "K"
                  : ""}
              </div>
              <div className="ratings flex gap-x-3 hover:duration-200 hover:bg-amber-300 hover:h-8 hover:w-20 hover:rounded-2xl text-center">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/fluency/48/star--v1.png"
                  alt="star--v1"
                />
                {card.ratingAvg}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn bg-gradient-to-b from-[#632EE3] to-[#9F62F2] mt-10 h-12 w-40">
        Show All
      </button>
    </div>
  );
};

export default TreandingApps;
