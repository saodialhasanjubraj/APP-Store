import React, { Suspense } from "react";
import TotalUseInfo from "./Total App use Inforamtion Component/TotalUseInfo";
import TreandingApps from "./Treanding Apps/TreandingApps";
import { useLoaderData } from "react-router";
const Home = () => {
  const data = useLoaderData();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl lg:text-7xl font-semibold text-center mt-8 mb-5">
        We Build <br /> <span className="text-purple-400">Productive</span> Apps
      </h1>
      <p>
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br /> Our goal is to turn your ideas into digital experiences that
        truly make an impact.
      </p>

      <div className="googleAppStoreBtns flex items-center gap-x-4 mt-10 mb-5">
        <a href="https://play.google.com/store/games?hl=en">
          <button className="btn btn-outline py-1 h-15 px-5 text-2xl">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/fluency/48/google-play.png"
              alt="google-play"
              className="lg:h-15 h-10 lg:w-15 w-10"
            />
            Google Play
          </button>
        </a>
        <a href="https://www.apple.com/app-store/">
          <button className="btn btn-outline py-1 h-15 px-5 text-2xl">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/48/apple-app-store--v3.png"
              alt="apple-app-store--v3"
              className="lg:h-15 h-10 lg:w-15 w-10"
            />
            App Store
          </button>
        </a>
      </div>
      <img
        src="https://i.postimg.cc/85Ky9QxP/hero.png"
        alt=""
        srcset=""
        className="mx-auto my-5"
      />

      <TotalUseInfo />
      <Suspense fallback={<span className="loading ">data loading</span>}>
        <TreandingApps data={data} />
      </Suspense>
    </div>
  );
};

export default Home;
