import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
// import useAuth from "../../hooks/useAuth";

const ChefRecipes = () => {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipesByChef = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/recipes/chef/${user.email}`
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

    if (user?.email) {
      fetchRecipesByChef();
    }
  }, [user]);

  return (
    <div className="bg-blue-100 p-8 rounded-md">
      <h1 className="text-2xl font-bold mb-6">My Recipes</h1>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="mb-4 p-4 bg-white rounded-md shadow-md"
          >
            <h2 className="text-xl font-bold">{recipe.title}</h2>
            <p>
              <strong>Ingredients:</strong> {recipe.ingredients}
            </p>
            <p>
              <strong>Instructions:</strong> {recipe.instructions}
            </p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default ChefRecipes;
