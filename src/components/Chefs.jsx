import { useLoaderData } from "react-router-dom";

import ChefCard from "./cards/ChefCard";

const Chefs = () => {
  const chefsData = useLoaderData();
  // console.log(chefsData);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-6">See our All Chefs</h1>

      <div className="grid md:grid-cols-3 gap-4 mx-10 my-10">
        {chefsData?.map((chef) => (
          <ChefCard key={chef?._id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chefs;
