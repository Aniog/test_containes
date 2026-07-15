import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink">
      <Navbar />
      <main ref={mainRef} className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
