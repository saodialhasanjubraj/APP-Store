import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import CardComponent from "../../components/Card Component/CardComponent";

const AppsComponent = () => {
  const largeData = useLoaderData();
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="text-4xl font-semibold mb-3 mt-5">Our All Applications</h1>
      <p>
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="appsFoundSearch w-full flex items-center justify-between">
        <h1>({largeData.length}) Apps Found</h1>
        <input
          type="text"
          placeholder="Search Apps"
          className="border-2 border-gray-300 pl-1"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-x-auto mx-auto gap-y-3 mt-10">
        <Suspense fallback={<h1>data loading............</h1>}>
          {largeData.map((card) => (
            <CardComponent card={card} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default AppsComponent;
