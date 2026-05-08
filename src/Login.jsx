import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Form, setForm] = useState({
    password: "",
    username: "",
  });
  const navigate = useNavigate();

  function set(field){
    return (e) => setForm((v) => ({...v,  [field]: e.target.value}))
    }

  async function loginAPI(e) {
    e.preventDefault();
    const url = "https://api.freeapi.app/api/v1/users/login";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(Form),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.message);
      if (data.success == true) {
        navigate("/success");
      }
      return;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="page-wrapper">
      <div className="auth-card" id="login-card">
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Sign in to your account</p>
        <form className="auth-form" onSubmit={loginAPI}>
          <div className="form-group">
            <label className="form-label" htmlFor="username-input">Username</label>
            <input className="form-input" type="text" id="username-input" placeholder="Enter your username" value={Form.username} onChange={set("username")} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password-input">Password</label>
            <input className="form-input" type="password" id="password-input" placeholder="Enter your password" value={Form.password} onChange={set("password")} />
          </div>

          <button className="btn btn-primary" type="submit">Sign In</button>
          <p className="auth-footer">
            New to AuthenticatOR?{" "}
            <span
              onClick={() => navigate("/register")}
              className="auth-link"
              id="login-page-register"
            >
              Create an account
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
