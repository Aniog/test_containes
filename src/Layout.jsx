import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";

export default function Layout() {
  const location = useLocation();

  // Re-run the strk image loader on every route change so freshly
  // mounted product / collection images get hydrated.
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, document.body);
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      ImageHelper.disconnect(document.body);
    };
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink">
      <Navbar />
      <main key={location.pathname} className="flex-1 animate-fade-in-soft">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
