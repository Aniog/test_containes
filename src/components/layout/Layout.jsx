import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

const TRANSPARENT_NAVBAR_ROUTES = ["/"];

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const transparent = TRANSPARENT_NAVBAR_ROUTES.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar transparent={transparent} />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
