import { use } from "react";
import { StoreAppInformationContext } from "../Root/Root";
const InstallApps = () => {
  const [storeDownloadInfromation] = use(StoreAppInformationContext);

  const storeData = [...storeDownloadInfromation, storeDownloadInfromation];

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl font-semibold my-5">Your Installed Apps</h1>
      <p className="mb-10 border-b-2 w-full text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="w-full">
        {storeData.map((card) => (
          <div className="flex h-20 w-full justify-between shadow-xl mb-4 rounded-xl items-center px-1">
            <div className="imageBoxText flex items-center gap-x-3">
              <img
                src={card.image}
                alt=""
                srcset=""
                className="h-16 w-16 rounded-xl"
              />
              <div className="textBox">
                <h1>{card.title}</h1>
                <div className="iconBox flex items-center">
                  <div className="text-sm font-bold flex items-center gap-1 w-20 h-10">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-sharp/24/download--v1.png"
                      alt="download--v1"
                    />
                    {card.downloads >= 1000000
                      ? card.downloads / 1000000 + "M"
                      : card.downloads / 1000 + "k"}
                  </div>
                  <div className="flex h-10 w-20 items-center gap-1">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/fluency/48/filled-star.png"
                      alt="filled-star"
                    />
                    {card.ratingAvg}
                  </div>
                  <h1 className=""> {card.size} Mb</h1>
                </div>
              </div>
            </div>
            <button className="btn btn-secondary">Uninstall</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallApps;
