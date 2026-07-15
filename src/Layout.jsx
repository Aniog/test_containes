import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-sable">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
