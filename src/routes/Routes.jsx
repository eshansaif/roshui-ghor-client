import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import DashbaordLayout from "../layouts/DashbaordLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../pages/dashboard/DashboardHome";
import ManageAllRecipe from "../pages/dashboard/ManageAllRecipe";
import AddRecipe from "../pages/dashboard/AddRecipe";
import EditRecipe from "../pages/dashboard/EditRecipe";
import AllRecipes from "../pages/AllRecipes";
import Contact from "../pages/dashboard/Contact";
import RecipeDetails from "../pages/dashboard/RecipeDetails";
import RecipesByCategory from "../pages/RecipesByCategory";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import EditProfile from "../pages/dashboard/EditProfile";
import ChefRecipes from "../pages/ChefRecipes";
import MyRecipe from "../pages/dashboard/MyRecipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "all-recipes",
        element: <AllRecipes />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "category/:cat",
        element: <RecipesByCategory />,
      },
      {
        path: "chef-recipes", // Define the path for ChefRecipes
        element: <ChefRecipes />, // Add the ChefRecipes component
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashbaordLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "manage-recipes",
        element: <ManageAllRecipe />,
      },
      {
        path: "add-recipe",
        element: <AddRecipe />,
      },
      {
        path: "edit-recipe/:id",
        element: <EditRecipe />,
      },
      {
        path: "recipe-details/:id",
        element: <RecipeDetails />,
      },
      {
        path: "profile/edit/:id",
        element: <EditProfile />,
      },
      {
        path: "my-recipe/:email",
        element: <MyRecipe />,
      },
    ],
  },
]);
