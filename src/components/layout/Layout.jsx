import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

export default function Layout({ children }) {
  const location = useLocation();
  // Only the homepage has a full-bleed hero behind the nav.
  const transparentNav = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink">
      <Nav transparentOverHero={transparentNav} />
      {/* Pad inner pages so content sits below the fixed nav. Home compensates with hero. */}
      <main className={`flex-1 ${transparentNav ? "" : "pt-16 md:pt-20"}`}>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
