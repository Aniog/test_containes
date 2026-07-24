import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top on route change (but allow hash to anchor)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
  }, [pathname]);

  return (
    <div className="flex-1 flex flex-col">
      <Navbar />
      {/* Spacer for fixed navbar */}
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
