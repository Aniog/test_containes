import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Layout() {
  const { pathname } = useLocation();

  // Reset scroll on route change. We use instant scroll for navigation, then
  // disable smooth scroll temporarily so the page doesn't animate-jump when
  // the user clicks a link from inside a long page.
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory-100 text-espresso">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
