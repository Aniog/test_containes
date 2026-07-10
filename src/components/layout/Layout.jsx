import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

export default function Layout() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, rootRef.current);
  }, []);

  return (
    <div
      ref={rootRef}
      className="min-h-screen flex flex-col bg-sand-50 text-ink-950"
    >
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
