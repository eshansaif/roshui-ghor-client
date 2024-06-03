import React from 'react';

const Newsletter = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 ">
                <div className=" md:items-center md:justify-between text-center">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mb-6 md:mb-0">
                        Sign up for our Newsletter
                    </h2>
                    <p className="mt-3 text-gray-600 md:mt-0 md:ml-6 text-lg">
                        Stay updated with our latest news and events.
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <form className="mt-8 sm:flex ">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full px-5 py-3 border border-gray-400 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none sm:max-w-xs rounded-md"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="mt-3 w-full px-5 py-3 bg-indigo-600 border border-transparent rounded-md shadow-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
