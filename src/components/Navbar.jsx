import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{padding: "20px", backgroundColor: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)"}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto"}}>
        <Link to="/" style={{fontSize: "24px", fontFamily: "serif", color: "#1a1a1a", textDecoration: "none"}}>
          VELMORA
        </Link>
        <div style={{display: "flex", gap: "20px"}}>
          <Link to="/shop" style={{color: "#1a1a1a", textDecoration: "none"}}>Shop</Link>
          <Link to="/collections" style={{color: "#1a1a1a", textDecoration: "none"}}>Collections</Link>
          <Link to="/about" style={{color: "#1a1a1a", textDecoration: "none"}}>About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
