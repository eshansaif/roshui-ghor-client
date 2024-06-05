import axios from "axios";
import { useEffect, useState } from "react";
import RecepiCard from "../components/cards/RecepiCard";

export default function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  // console.log(categories);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function loadRecipes() {
      const data = await axios.get(
        "https://roshui-ghor-backend.vercel.app/recipes"
      );
      if (data?.status === 200) {
        setRecipes(data?.data);
      }
    }
    async function loadCategories() {
      const data = await axios.get(
        "https://roshui-ghor-backend.vercel.app/categories"
      );
      // console.log(data);
      if (data?.status === 200) {
        setCategories(data?.data);
      }
    }
    loadRecipes();
    loadCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredRecipes =
    selectedCategory === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory);

  return (
    <div className="mx-16 mb-4">
      <h1 className="text-4xl my-20 text-center">Our All Recipes</h1>

      <div className="flex justify-end">
        <div className="mb-8 text-center">
          <label htmlFor="category" className="mr-2 font-semibold">
            Filter by Category:{" "}
          </label>
          <select
            className="border rounded-md"
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All</option>
            {categories.map((category) => (
              <option key={category.id} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecepiCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
