import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ScrollToTop from "@/components/ScrollToTop";
import { useStockImages } from "@/hooks/useStockImages";
import { useCart } from "@/context/CartContext";

function LayoutInner() {
  const { isCartOpen, items } = useCart();
  const containerRef = useStockImages([isCartOpen, items.length]);

  return (
    <div ref={containerRef} className="min-h-screen bg-cream text-ink">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default function Layout() {
  return <LayoutInner />;
}
