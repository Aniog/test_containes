import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CartToast from "@/components/CartToast";

export default function Layout() {
  const { pathname, search } = useLocation();
  const appRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, search]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, appRef.current);
  }, [pathname]);

  return (
    <div ref={appRef} className="min-h-screen bg-ivory font-sans text-espresso">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <CartToast />
    </div>
  );
}

