function Register() {
  return (
    <section className="register-section">
      <div className="login-intro">
        <h2>Join The Dispatch</h2>
        <p>Sign in to your account to continue writing.</p>
      </div>
      <form action="" method="post">
        <label htmlFor="email">Username</label>
        <input type="text" placeholder="amara_writes" />
        <label htmlFor="email">Email Address</label>
        <input type="email" placeholder="your@example.com" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Atleast 8 characters" />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" placeholder="·······" />
        <button type="submit">Create Account</button>
      </form>
      <div className="form-links">
        <span>Already have an account? </span>
        <button>Sign in</button>
      </div>
    </section>
  );
}

export default Register;
