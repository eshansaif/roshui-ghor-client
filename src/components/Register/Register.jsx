import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import swal from 'sweetalert';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        setError("");
        if (password !== confirm_password) {
            setError("Passwords do not match");
            return;
        }
        else if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }


        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
                updateUser(loggedUser, name, photoURL)
                swal("Thank You!", "You have registered Successfully!", "success");
                navigate("/login")
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            })


    };

    const updateUser = (user, name, photoURL) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL
        })
            .then(result => {
                console.log(result);
            })
    }


    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <form onSubmit={handleRegister} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <h3 className="text-center text-gray-900 font-bold mb-2">Please Register</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            name='name'
                            type="name"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            name='email'
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="photoURL">
                            PhotoURL
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photoURL"
                            name='photoURL'
                            type="text"
                            placeholder="PhotoURL"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            name='password'
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Confirm Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirm_password"
                            name='confirm_password'
                            type="password"
                            placeholder="Re-type Password"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <input
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            value="Register"
                        />
                        <p> Already Registered? <Link to="/login"
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"

                        >
                            Login
                        </Link>
                        </p>
                    </div>
                    {
                        error && <p className="text-red-600 mt-3 text-center">{error}</p>
                    }
                </form>

            </div>
        </div>
    );
};

export default Register;