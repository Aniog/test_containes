import React from "react";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cream text-espresso">
      <Nav />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
