import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";

export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const containerRef = useRef(null);

  // Scroll to top on route change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // Load stock images for the whole page subtree; rescan on route change.
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.search]);

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col bg-cream">
      <Navbar onSearch={() => setSearchOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#211A15",
            color: "#FFFDF9",
            border: "1px solid #4A3B2D",
            borderRadius: "2px",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
    </div>
  );
}
