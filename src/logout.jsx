import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LogoutScreen() {
  const [state, setState] = useState();
  const navigate = useNavigate();

     useEffect(() => {
       setTimeout(() => {
         navigate("/");
       }, 2000)
     
     }, [])
     
  return (
    <div className="page-wrapper">
      <div className="success-card">
        <h2 className="success-title">Logged Out</h2>
        <p className="success-message">Successfully logged out. Redirecting...</p>
      </div>
    </div>
  );
}

export default LogoutScreen;
