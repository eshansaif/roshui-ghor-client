import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

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

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
