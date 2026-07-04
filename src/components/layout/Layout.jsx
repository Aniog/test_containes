import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import CartDrawer from "./CartDrawer.jsx";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main className="pt-0">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
