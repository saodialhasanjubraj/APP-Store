import React from "react";
import { ComposedChart, Line, Bar, XAxis, YAxis } from "recharts";

const RatingBarCahrt = ({ ratings }) => {
  // const [ratingCount, setRatingCount]= useState([])
  // const newCount = ratings.map(rating =>setRatingCount(rating))

  return (
    <div className="h-100 w-full flex items-center">
      <ComposedChart
        layout="vertical"
        width={800}
        height={400}
        data={ratings}
        margin={{
          top: 20,
          right: 20,
          left: 20,
        }}
      >
        <XAxis type="number" />
        <YAxis type="category" scale="band" />

        <Bar dataKey="count" barSize={20} fill="#413ea0" />
        <Line stroke="#FFFF00" />
      </ComposedChart>
    </div>
  );
};

export default RatingBarCahrt;
