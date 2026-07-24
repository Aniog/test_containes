import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

// Pages that have a full-bleed dark hero should keep navbar transparent initially.
const HERO_PAGES = ["/", "/about", "/journal"];

export default function Layout() {
  const { pathname } = useLocation();
  const showTransparentOnTop = HERO_PAGES.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-ink-800">
      <Navbar variant={showTransparentOnTop ? "auto" : "solid"} />
      {/* Spacer only when navbar is solid; on hero pages, hero bleeds under the transparent bar */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
