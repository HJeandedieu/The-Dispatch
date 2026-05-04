function Login() {
  return (
    <section>
      <div className="login-intro">
        <h2>Welcome back</h2>
        <p>Sign in to your account to continue writing.</p>
      </div>
      <form action="" method="post">
        <label htmlFor="email">Email Address</label>
        <input type="email" placeholder="your@example.com" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="········" />
        <input type="checkbox" />
        Remember me
        <button type="submit">Sign in</button>
      </form>
      <div className="form-links">
        <button>Forgot Password</button>
        <span>·</span>
        <button>Create an account</button>
      </div>
    </section>
  );
}

export default Login;
