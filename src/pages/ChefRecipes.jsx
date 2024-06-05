import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useParams } from "react-router-dom";
import RecepiCard from "../components/cards/RecepiCard";
// import useAuth from "../../hooks/useAuth";

const ChefRecipes = () => {
  // const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const { email } = useParams();
  console.log(email);

  useEffect(() => {
    const fetchRecipesByChef = async () => {
      try {
        const response = await fetch(
          `https://roshui-ghor-backend.vercel.app/recipes/chef/${email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    if (email) {
      fetchRecipesByChef();
    }
  }, []);

  return (
    <div className="bg-blue-100 p-8 rounded-md">
      <h1 className="text-2xl font-bold mb-6">Chef Recipes</h1>
      <div className="grid md:grid-cols-3 gap-3">
        {recipes.length > 0 ? (
          recipes.map((recipe) => <RecepiCard recipe={recipe} />)
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default ChefRecipes;
