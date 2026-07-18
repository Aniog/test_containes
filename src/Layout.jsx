import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans">
      <Navbar />
      {children}
      <Footer />
      <CartDrawer />
    </div>
  );
}
