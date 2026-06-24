import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import strkImgConfig from "@/strk-img-config.json";

export default function Layout() {
  const location = useLocation();
  const rootRef = useRef(null);

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // After each route commit, scan the new DOM subtree for stock images.
  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (rootRef.current) {
        ImageHelper.loadImages(strkImgConfig, rootRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [location.pathname]);

  return (
    <div ref={rootRef} className="min-h-screen flex flex-col bg-bone text-espresso">
      <Nav />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}