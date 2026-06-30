import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink">
      <Nav />
      {/* Spacer for fixed nav (nav is fixed) */}
      <main key={pathname} className="flex-1 animate-fadeUp">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
