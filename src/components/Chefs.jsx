import { useLoaderData } from "react-router-dom";
import { FaMobileRetro } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const Chefs = () => {
  const chefsData = useLoaderData();
  console.log(chefsData);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-6">See our All Chefs</h1>

      <div className="grid md:grid-cols-3 gap-4 mx-10 my-10">
        {chefsData?.map((chef) => (
          <div key={chef?._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-60" src={chef?.photoURL} alt="Chef Photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{chef?.name}</h2>
              <p className="flex gap-2 items-center">
                <FaMobileRetro /> <span>{chef?.phoneNumber}</span>
              </p>
              <p className="flex gap-2 items-center">
                <MdMarkEmailUnread /> <span>{chef?.email}</span>
              </p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">View All Recipes</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
