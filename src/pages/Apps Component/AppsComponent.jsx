import React from "react";
import { useLoaderData } from "react-router";
import CardComponent from "../../components/Card Component/CardComponent";

const AppsComponent = () => {
  const largeData = useLoaderData();
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="text-4xl font-semibold mb-3">Our All Applications</h1>
      <p>
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="appsFoundSearch">
        <h1>({largeData.length}) Apps Found</h1>
      </div>

      <div className="grid grid-cols-4 w-full gap-x-auto mx-auto gap-y-3 mt-10">
        {largeData.map((card) => (
          <CardComponent card={card} />
        ))}
      </div>
    </div>
  );
};

export default AppsComponent;
