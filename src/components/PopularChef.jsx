import React from "react";
import ChefCard from "./cards/ChefCard";

const PopularChef = ({ chefs }) => {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center mt-6">
        See our Popular Chefs
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mx-10 my-10">
        {chefs?.slice(0, 3)?.map((chef) => (
          <ChefCard key={chef?._id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default PopularChef;
