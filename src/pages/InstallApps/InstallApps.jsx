import { use } from "react";
import { StoreAppInformationContext } from "../Root/Root";
const InstallApps = () => {
  const [storeDownloadInfromation] = use(StoreAppInformationContext);

  console.log(storeDownloadInfromation, "log from installApp");

  return (
    <div>
      {storeDownloadInfromation.map((e) => (
        <li>{e.companyName}</li>
      ))}
    </div>
  );
};

export default InstallApps;
