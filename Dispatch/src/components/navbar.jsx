import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-main">
        <h1>The Dispatch</h1>
        <Link className="nav-button" to="/">Home</Link>
        <Link className="nav-button" to="/articles">Articles</Link>
      </div>
      <div className="navbar-login">
        <Link  className="nav-button" to="/login" id="login-button">Login</Link>
        <Link  className="nav-button" to="/register" id="register-button">Register</Link>
      </div>
    </div>
  );
}

export default Navbar;
