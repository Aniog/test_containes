import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";

export default function Layout({ children }) {
  const location = useLocation();
  // Transparent navbar only on the homepage (hero overlap)
  const transparentNav = location.pathname === "/";

  // Scroll to top on route change (preserves cart drawer feeling)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-velmora-cream text-velmora-ink">
      <Navbar transparent={transparentNav} />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
