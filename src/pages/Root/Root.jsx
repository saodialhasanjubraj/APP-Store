import React, { createContext, useState } from "react";
import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
export const StoreAppInformationContext = createContext([]);
const Root = () => {
  const [storeDownloadInfromation, setStoreDownloadInfromation] = useState([]);
  return (
    <div className="w-full max-w-300 mx-auto">
      <StoreAppInformationContext
        value={[storeDownloadInfromation, setStoreDownloadInfromation]}
      >
        <Header />
        <Outlet />
        <Footer />
      </StoreAppInformationContext>
    </div>
  );
};

export default Root;
