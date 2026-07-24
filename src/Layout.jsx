import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import { CartProvider } from "@/context/CartContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function Layout() {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.search]);

  return (
    <CartProvider>
      <ScrollToTop />
      <div ref={containerRef} className="min-h-screen bg-ivory text-ink">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#16120E",
              color: "#FAF6EF",
              border: "1px solid rgba(217,196,154,0.3)",
              borderRadius: "0",
              fontSize: "13px",
              letterSpacing: "0.04em",
            },
          }}
        />
      </div>
    </CartProvider>
  );
}
