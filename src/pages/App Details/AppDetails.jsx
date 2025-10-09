import { Download } from "lucide";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

import RatingBarCahrt from "../../components/RatingBarChat/RatingBarCahrt";
const AppDetails = () => {
  const [disAbled, setDisAble] = useState(false);
  const { id } = useParams();
  const largeData = useLoaderData();

  const searchApp = largeData.find((app) => app.id === Number(id));
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = searchApp;
 const notify = () => toast(title +" "+"installing");
  return (
    <div>
      <div className="flex">
        <div className="imageText flex gap-10 mt-5">
          <img src={image} alt="" srcset="" className="h-60 w-60 rounded-2xl" />
          <div className="textBox">
            <h1 className="text-2xl my-2.5 font-bold">{title}</h1>
            <h1 className="border-b-2">
              Developed by:{" "}
              <span
                className="text-purple-500 font-semibold"
                style={{ fontFamily: "arial" }}
              >
                {companyName}
              </span>
            </h1>
            <div className="performanceBox flex items-center gap-x-15 mt-5">
              <div className="iconBox flex flex-col items-center h-20 w-30 justify-center">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-sharp/24/download--v1.png"
                  alt="download--v1"
                />
                <h1>Download</h1>
                <h3 className="text-2xl font-bold">
                  {downloads >= 1000000
                    ? downloads / 1000000 + "M"
                    : downloads / 1000 + "k"}
                </h3>
              </div>
              <div className="iconBox flex flex-col items-center h-20 w-35 justify-center">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/fluency/48/filled-star.png"
                  alt="filled-star"
                />
                <h1 className="">Avrave Ratings</h1>
                {ratingAvg}
              </div>
              <div className="iconBox flex flex-col items-center h-20 w-30 justify-center">
                <img
                  width="26"
                  height="26"
                  src="https://img.icons8.com/ios-filled/50/facebook-like.png"
                  alt="facebook-like"
                />
                <h1>Total Review</h1>
                <h3 className="text-2xl font-bold">
                  {reviews >= 1000000
                    ? reviews / 1000000 + "M"
                    : reviews / 1000 + "k"}
                </h3>
              </div>
            </div>
            <button
              className="btn btn-accent mt-4"
              disabled={disAbled}
              onClick={() => {setDisAble(true), notify()}}
            >
              {disAbled ? "Downloaded" : "Download"} ({size} MB)
                <ToastContainer position="top-center" />
            </button>
          </div>
        </div>
      </div>

      {/* Bar Chart in here */}

      <div className="description flex text-justify mt-10">
        {"Descripiton: " + description}
      </div>
      <RatingBarCahrt ratings={ratings} />
    </div>
  );
};

export default AppDetails;
