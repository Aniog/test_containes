import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-espresso">
      <Nav />
      <CartDrawer />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
