import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Navbar from "@/components/layout/Navbar";
import CartDrawer from "@/components/layout/CartDrawer";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";

export default function Layout() {
  const containerRef = useRef(null);
  const location = useLocation();
  const { isCartOpen, items } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.search, isCartOpen, items.length]);

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory text-espresso">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
