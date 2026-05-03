function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-main">
        <h1>The Dispatch</h1>
        <button>Home</button>
        <button>Articles</button>
      </div>
      <div className="navbar-login">
        <button id="login-button">Login</button>
        <button id="register-button">Register</button>
      </div>
    </div>
  );
}

export default Navbar;
