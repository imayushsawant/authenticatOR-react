import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [Form, setForm] = useState({
    email: "",
    password: "",
    role: "ADMIN",
    username: "",
  });
  const [Error, setError] = useState("")
  const navigate = useNavigate();

  function set(field) {
    return (e) => setForm((v) => ({ ...v, [field]: e.target.value }));
  }

  async function registerAPI(e) {
    e.preventDefault()
    const url = "https://api.freeapi.app/api/v1/users/register";
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
      if(data.message === "Received data is not valid"){
        setError("Please Enter Username, Email and Password")
      }
      return;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="page-wrapper">
      <div className="auth-card" id="register-card">
        <h2 className="auth-title">Create account</h2>
        <p className="auth-subtitle">Get started with AuthenticatOR</p>
        <form className="auth-form" onSubmit={registerAPI}>
          <div className="form-group">
            <label className="form-label" htmlFor="username-input">Username</label>
            <input
              className="form-input"
              type="text"
              id="username-input"
              placeholder="Pick a username"
              value={Form.username}
              onChange={set("username")}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email-input">Email</label>
            <input
              className="form-input"
              type="text"
              id="email-input"
              placeholder="you@example.com"
              value={Form.email}
              onChange={set("email")}
              />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password-input">Password</label>
            <input
              className="form-input"
              type="password"
              id="password-input"
              placeholder="Create a password"
              value={Form.password}
              onChange={set("password")}
            />
          </div>
            <p className="error">{Error}</p>
          <button className="btn btn-primary" type="submit">Create Account</button>
          <p className="auth-footer">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="auth-link"
              id="login-page-register"
            >
              Sign in instead
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
