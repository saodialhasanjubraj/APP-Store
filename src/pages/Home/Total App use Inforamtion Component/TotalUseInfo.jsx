import React from "react";
import CountUp from "react-countup";
const TotalUseInfo = () => {
  return (
    <div className="w-full h-102.5 bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white text-center py-20">
      <h1 className="text-5xl font-bold">Trusted by Millions, Built for You</h1>
      <div className="cards w-full flex items-center justify-baseline px-20 mt-10">
        <div className="card  w-83 h-38 flex flex-col gap-y-4">
          <small>Total Downloads</small>
          <h1 className="text-xl lg:text-[64px] font-extrabold">
            <CountUp end={29.6} duration={4} separator="," />M
          </h1>
          <small>21% more than last month</small>
        </div>
        <div className="card  w-83 h-38 flex flex-col gap-y-4">
          <small>Total Review</small>
          <h1 className="text-xl lg:text-[64px] font-extrabold">
            <CountUp end={906} duration={4} separator="," />K
          </h1>
          <small>46% more than last month</small>
        </div>
        <div className="card  w-83 h-38 flex flex-col gap-y-4">
          <small>Active Apps</small>
          <h1 className="text-xl lg:text-[64px] font-extrabold">
            <CountUp end={132} duration={4} separator="," />+
          </h1>
          <small>31 more will Launch</small>
        </div>
      </div>
    </div>
  );
};

export default TotalUseInfo;
