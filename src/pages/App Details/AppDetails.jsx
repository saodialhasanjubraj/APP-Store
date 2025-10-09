import { Download } from "lucide";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
const AppDetails = () => {
  const [disAbled, setDisAble] = useState(false);
  const { id } = useParams();
  const largeData = useLoaderData();
  // console.log(typeof idName);

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

  console.log(searchApp, "searchapp");
  console.log(image);

  return (
    <div>
      <div className="imageText">
        <img src={image} alt="" srcset="" className="h-30 w-30" />
        <div className="textBox">
          <h1>{title}</h1>
          <h1>
            Developed by: <span>{companyName}</span>
          </h1>
          <div className="performanceBox flex items-center gap-x-15">
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
            <div className="iconBox flex flex-col items-center h-20 w-30 justify-center">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/fluency/48/filled-star.png"
                alt="filled-star"
              />
              <h1>Avrave Ratings</h1>
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
            className="btn btn-accent"
            disabled={disAbled}
            onClick={() => setDisAble(true)}
          >
            {disAbled ? "Downloading" : "Download"} ({size})
          </button>
          {/* <div className="ratingBox">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
