import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NotFound from "../components/NotFound/NotFound";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../components/Blogs/Blogs";
import About from "../components/About/About";
import ContactUs from "../components/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b7a10-chef-recipe-hunter-server-side-eshansaif-eshansaif.vercel.app/chefs')
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoutes><ChefRecipes></ChefRecipes></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://b7a10-chef-recipe-hunter-server-side-eshansaif-eshansaif.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: "*",
                element: <NotFound></NotFound>
            }
        ]
    }
])

export default router;