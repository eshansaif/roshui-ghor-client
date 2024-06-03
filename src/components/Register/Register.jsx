import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    setError("");
    if (password !== confirm_password) {
      setError("Passwords do not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      await createUser(email, password);
      form.reset();
      swal("Thank You!", "You have registered Successfully!", "success");
      navigate("/");
    } catch (err) {
      console.error("Error during user creation:", err);
      setError(handleFirebaseErrors(err.code) || err.message);
    }
  };

  const handleFirebaseErrors = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "The email address is already in use by another account.";
      case "auth/invalid-email":
        return "The email address is badly formatted.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      default:
        return "Registration failed. Please try again.";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleRegister}
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
        >
          <h3 className="text-center text-gray-900 font-bold mb-2">
            Please Register
          </h3>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm_password"
              name="confirm_password"
              type="password"
              placeholder="Re-type Password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Register"
            />
            <p>
              Already Registered?{" "}
              <Link
                to="/login"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Login
              </Link>
            </p>
          </div>
          {error && <p className="text-red-600 mt-3 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
