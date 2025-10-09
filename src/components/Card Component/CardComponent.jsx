import React from "react";
import { Link } from "react-router";

const CardComponent = ({ card }) => {
  return (
    <Link
      to={`/appDetails/${card.id}`}
      className="w-[285px] h-auto py-10 flex items-center flex-col bg-white shadow-2xl text-black px-5 rounded-2xl hover:cursor-pointer"
    >
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
    </Link>
  );
};

export default CardComponent;
