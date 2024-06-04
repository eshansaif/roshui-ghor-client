import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";

const GoogleLogin = () => {
  const { googleLogin, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = async () => {
    try {
      const data = await googleLogin();
      if (data?.user?.email) {
        const userInfo = {
          email: data.user.email,
          name: data.user.displayName,
        };
        const response = await fetch("http://localhost:3000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
        const result = await response.json();
        localStorage.setItem("token", result?.token);
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <p className="flex justify-center items-center gap-2">
          <FcGoogle /> <span>Google</span>
        </p>
      </div>
    </button>
  );
};

export default GoogleLogin;
