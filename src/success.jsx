import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const [state, setState] = useState();
  const navigate = useNavigate();

  async function logoutAPI() {
    const url = "https://api.freeapi.app/api/v1/users/logout";
    const options = { method: "POST", headers: { accept: "application/json" } };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      navigate("/loggedout")
      return;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="page-wrapper">
      <div className="success-card" id="success-card">
        <div className="success-icon">✓</div>
        <h2 className="success-title">You're In!</h2>
        <p className="success-message">
          Successfully authenticated. Your identity has been verified and your
          session is now active.
        </p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Go to Dashboard
        </button>
        <button className="btn btn-primary" onClick={logoutAPI}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Success;
