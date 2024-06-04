// import React, { useEffect } from "react";
// import {
//   useAuthState,
//   useCreateUserWithEmailAndPassword,
// } from "react-firebase-hooks/auth";
// import { auth } from "../firebase/firebase.config";
// import { Link, useNavigate } from "react-router-dom";
// import GoogleLogin from "../components/Auth/GoogleLogin";

// export default function Register() {
//   const [user, loading, error] = useAuthState(auth);
//   const navigate = useNavigate();
//   const [
//     createUserWithEmailAndPassword,
//     userCreationLoading,
//     userCreationError,
//   ] = useCreateUserWithEmailAndPassword(auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     try {
//       const data = await createUserWithEmailAndPassword(email, password);
//       if (data?.user?.email) {
//         const userInfo = {
//           email: data.user.email,
//           name: name,
//         };
//         const response = await fetch("http://localhost:3000/user", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userInfo),
//         });
//         const result = await response.json();
//         console.log(result);
//       }
//     } catch (error) {
//       console.error("Error creating user:", error);
//     }
//   };

//   let from = location.state?.from?.pathname || "/";

//   useEffect(() => {
//     if (user) {
//       navigate(from, { replace: true });
//     }
//   }, [user, loading, navigate, from]);

//   return (
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content grid grid-cols-2 w-full mx-auto">
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl font-bold">Register now!</h1>
//           <p className="py-6">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>
//         </div>
//         <div className="card shadow-2xl bg-base-100 max-w-lg">
//           <form onSubmit={handleSubmit} className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="name"
//                 name="name"
//                 placeholder="name"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control mt-2">
//               <button
//                 className="btn btn-primary"
//                 disabled={userCreationLoading}
//               >
//                 {userCreationLoading ? "Registering..." : "Register"}
//               </button>
//               {userCreationError && (
//                 <p className="text-red-600 mt-3 text-center">
//                   {userCreationError.message}
//                 </p>
//               )}
//               <p className="text-center">
//                 Already have an account?{" "}
//                 <Link to={"/login"} className="text-orange-500">
//                   Login
//                 </Link>
//               </p>
//             </div>
//           </form>
//           <div className="w-full">
//             <div className="flex flex-col gap-2 mx-7 mb-7">
//               <GoogleLogin />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
