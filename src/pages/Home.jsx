import { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import RecepiCard from "../components/cards/RecepiCard";
import CategoryCard from "../components/cards/CategoryCard";
import PopularChef from "../components/PopularChef";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  const chefs = useLoaderData();

  useEffect(() => {
    async function loadData() {
      try {
        // Fetch recipes
        const recipeRes = await fetch(
          "https://roshui-ghor-backend.vercel.app/recipes"
        );
        const recipeData = await recipeRes.json();
        setRecipes(recipeData);

        // Fetch categories
        const categoryRes = await fetch(
          "https://roshui-ghor-backend.vercel.app/categories"
        );
        const categoryData = await categoryRes.json();
        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    loadData();
  }, []);

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div>
      <Banner />

      <div className="mx-16">
        <h1 className="text-4xl my-12 text-center">
          See Our Recipe By Category
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {categories?.map((category) => (
            <CategoryCard key={category?._id} category={category} />
          ))}
        </div>
      </div>

      <PopularChef chefs={chefs} />

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Popular Recipes</h1>
        <div className="grid md:grid-cols-4 gap-6 mb-4">
          {shuffleArray([...recipes])
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecepiCard key={recipe?._id} recipe={recipe} />
            ))}
        </div>
      </div>

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Newest Recipes</h1>
        <div className="grid md:grid-cols-4 gap-6 mb-4">
          {recipes
            ?.slice()
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecepiCard key={recipe?._id} recipe={recipe} />
            ))}
        </div>
      </div>

      {/* Add a section for blogs or YouTube videos */}
      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Recipe Blogs & Videos</h1>
        <div className="grid md:grid-cols-3 gap-6 mb-4 me-2">
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/Lw7EixBGu60?si=_DoUwFK4HGIA9V5e"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/6GIGcq8SCpE?si=o-VoVhQDZDSlTTsX"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/BHftqVU6IPk?si=uqY1KhTlnP3pQDfL"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID_4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}
