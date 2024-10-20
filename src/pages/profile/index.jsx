import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { jwtDecode } from "jwt-decode";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const tokenData = token ? jwtDecode(token) : null;

  if (!tokenData) return <h2>Login into your account</h2>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <h1>Profile</h1>
      <h2>{tokenData && tokenData.user.id}</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
