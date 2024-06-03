import React, { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaHeart, FaSortAmountDownAlt, FaStar, FaTheaterMasks, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Spinner } from '@chakra-ui/react';
AOS.init();


const ChefRecipes = () => {
    const chefRecipe = useLoaderData();
    const { chef_name, chef_picture, likes, number_of_recipes, recipe_info, views, years_of_experience, short_bio } = chefRecipe[0];
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToFav = () => {
        setIsFavorite(true);
        swal("Wow!", "You have added this Recipe to your Favorite List", "success");
    };

    if (!recipe_info) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size={64} color="#4B5563" /> {/* render the Spinner component */}
            </div>
        );
    }

    return (
        <div className='hero-content flex-col lg:flex-row'>
            <div data-aos="fade-up"
                data-aos-offset="200"
                // data-aos-delay="50"
                // data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false" className="hero min-h-screen md:w-2/5 mt-0" style={{ backgroundImage: `url(${chef_picture})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{chef_name}</h1>
                        <p className="mb-5"> <q> <i>{short_bio}</i> </q> </p>
                        <h2 className="mb-5 text-3xl font-medium text-start flex justify-center items-center"> Likes <FaThumbsUp className='mx-2 ' /> {likes}</h2>
                        <h2 className="mb-5 text-3xl font-medium text-start flex justify-center items-center">Total Recipes <FaSortAmountDownAlt className='mx-2'></FaSortAmountDownAlt> {number_of_recipes}</h2>
                        <h2 className="mb-5 text-3xl font-medium text-start flex justify-center items-center">Experiences <FaTheaterMasks className='mx-2' /> {years_of_experience} Years</h2>
                        <Link to="/"><button className="btn btn-primary">See All Chefs</button></Link>

                    </div>
                </div>
            </div>
            <div className="md:w-3/5">
                <h1 className="text-5xl font-bold underline">{chef_name}'s Recipes</h1>
                {recipe_info.map((recipe, index) => (
                    <div key={index} className="py-6">
                        <h2 className="text-3xl font-bold mb-2">{recipe.recipe_name}</h2>
                        <p className="text-xl  mb-2"><span className='font-bold'>How to Cook:</span> {recipe.cooking_method}</p>
                        {/* <p className="text-lg font-medium">{recipe.ingredients.join(', ')}</p> */}
                        <div className='mb-2'>
                            <p className='font-bold'>Ingredients:</p>
                            {
                                recipe.ingredients.map(ingredient => <p className="text-lg font-medium flex items-center"> <FaCheckCircle className='me-2' /> {ingredient}</p>)
                            }
                        </div>
                        {/* <p className="text-lg">{recipe.directions}</p> */}
                        <p className="text-lg">Rating: <Rating
                            initialRating={recipe.rating}
                            readonly
                            placeholderSymbol={<FaStar className="icon" />}
                            fullSymbol={<FaStar color="#FFD700" className="icon" />}
                            emptySymbol={<FaStar color="#C4C4C4" className="icon" />}
                        /></p>
                        <button
                            className="btn btn-link"
                            disabled={isFavorite}
                            onClick={handleAddToFav}
                        >
                            <i className="fas fa-heart"></i> Add to Favorites
                        </button>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default ChefRecipes;