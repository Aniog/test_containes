import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import Toast from "@/components/ui/Toast";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // On route change, scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  // Provide window.__STRIKINGLY_PREVIEW_NAVIGATE__ for the route bridge
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      const navigateEvent = new CustomEvent("velmora:navigate", {
        detail: { path, options },
      });
      window.dispatchEvent(navigateEvent);
    };
    return () => {
      try {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
      } catch {}
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bone">
      <Header tone="auto" />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
    </div>
  );
}
