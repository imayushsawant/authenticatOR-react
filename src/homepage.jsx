import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function HomePage() {

  const navigate = useNavigate()

  return (
    <div className="hero-section" id="homepage">
      <span className="hero-badge">🔐 Secure Authentication</span>
      <h2 className="hero-title">Welcome to AuthenticatOR</h2>
      <p className="hero-description">A secure, API-driven authentication gateway designed for modern web applications. Integrate robust identity verification, session management, and JWT-based authorization into your stack in minutes.</p>
      <div className="hero-actions">
        <button className="btn btn-primary" onClick={() => navigate(`/register`)}>Get Started</button>
        <button className="btn btn-ghost" onClick={() => navigate(`/login`)}>Sign In</button>
      </div>
    </div>
  )
}

export default HomePage;

