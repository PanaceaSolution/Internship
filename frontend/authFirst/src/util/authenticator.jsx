import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function withAuth(WrappedComponent) {
  return function AuthWrapper(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
      if (!token) {
        toast.error("Authentication required");
        navigate("/signup");
      }
    }, [token, navigate]);

    if (!token) return null;

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
