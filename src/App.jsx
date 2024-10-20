import Register from "./pages/register";
import Login from "./pages/login";
import Profile from "./pages/profile";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "0.5rem" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

/////
const Home = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
      </div>
    </>
  );
};
/////

export default App;
