import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";

export default function Layout() {
  const { pathname } = useLocation();
  const transparentNav = pathname === "/";

  return (
    <div className="min-h-screen bg-cream text-espresso">
      <Navbar transparent={transparentNav} />
      <main className={transparentNav ? "" : "pt-[72px]"}>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
