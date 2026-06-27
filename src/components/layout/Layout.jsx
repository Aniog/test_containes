import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";

export default function Layout({ children, transparentNav = false }) {
  return (
    <div className="min-h-screen flex flex-col bg-velmora-cream text-velmora-ink">
      <Navbar transparentOnTop={transparentNav} />
      <main className={transparentNav ? "" : "pt-16 md:pt-20"}>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
