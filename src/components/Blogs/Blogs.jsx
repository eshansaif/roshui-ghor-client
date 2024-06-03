import React from 'react';
import PropTypes from 'prop-types';

const Blogs = () => {
    return (
        <div className="container py-8 px-4 md:px-12 lg:px-24">
            <h1 className="text-3xl font-bold mb-8">Blogs</h1>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div className="bg-white shadow-md rounded-md p-6">
                    <h2 className="text-xl font-bold mb-4">Tell us the differences between uncontrolled and controlled components.</h2>
                    <p className="text-gray-700 mb-4">
                        In React, components can be either controlled or uncontrolled. Controlled components are
                        ones where the component's state is controlled by React, whereas uncontrolled components
                        are ones where the component's state is controlled by the DOM.
                    </p>
                    <p className="text-gray-700">
                        The main difference between the two is that with controlled components, you have more
                        control over the component's state and can easily update it, whereas with uncontrolled
                        components, you have less control and need to rely on DOM events to update the state.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-md p-6">
                    <h2 className="text-xl font-bold mb-4">How to validate React props using PropTypes?</h2>
                    <p className="text-gray-700 mb-4">
                        PropTypes is a package that provides a way to validate the props that are passed to a
                        React component. It's a useful tool for catching errors and debugging your code.
                    </p>
                    <p className="text-gray-700">
                        To use PropTypes, you need to import it from the 'prop-types' package and define the
                        propTypes property on your component. This property is an object that specifies the
                        expected type and shape of each prop.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-md p-6">
                    <h2 className="text-xl font-bold mb-4">Tell us the difference between nodejs and express js.</h2>
                    <p className="text-gray-700 mb-4">
                        Node.js and Express.js are both popular technologies used in web development, but they
                        serve different purposes. Node.js is a JavaScript runtime that allows you to execute
                        JavaScript on the server side, while Express.js is a web framework that runs on top of
                        Node.js and provides a way to handle HTTP requests and responses.
                    </p>
                    <p className="text-gray-700">
                        The main difference between the two is that Node.js is a lower-level technology that
                        gives you more control over the server-side environment, while Express.js is a higher-
                        level technology that abstracts away many of the details of handling HTTP requests and
                        responses.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-md p-6">
                    <h2 className="text-xl font-bold mb-4">What is a custom hook, and why will you create a custom hook?</h2>
                    <p className="text-gray-700 mb-4">
                        A custom hook is a reusable function that allows you to extract and reuse logic from React functional components. It's essentially a way to share stateful logic between components without using higher-order components or render props.
                    </p>
                    <p className="text-gray-700">
                        <p className="text-gray-700 mb-4">You might create a custom hook for a few reasons:</p>
                        <ul className="list-disc list-inside">
                            <li className="mb-2">
                                Code reuse and organization: Custom hooks allow you to extract and reuse logic across multiple components, which can make your code more modular and easier to maintain.
                            </li>
                            <li className="mb-2">
                                Abstraction of complex logic: Custom hooks can be used to abstract away complex logic and make your components more readable and easier to reason about.
                            </li>
                            <li>
                                State management: Custom hooks can help manage stateful logic that is shared across components. For example, you might create a custom hook to handle a complex form with multiple inputs.
                            </li>
                        </ul>

                    </p>
                </div>
            </div>
        </div>
    );
};

Blogs.propTypes = {};

export default Blogs;
