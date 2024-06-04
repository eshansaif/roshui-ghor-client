import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  // const [user, loading] = useAuthState(auth);
  const { user, loading } = useAuth();
  console.log(user);
  let location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
