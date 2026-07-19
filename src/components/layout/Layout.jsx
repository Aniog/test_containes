import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Layout() {
  const location = useLocation();
  const containerRef = useRef(null);

  // Scroll to top on route change (smooth for non-hash, instant for new page).
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname]);

  // Load stock images for the current page subtree on every route change.
  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
