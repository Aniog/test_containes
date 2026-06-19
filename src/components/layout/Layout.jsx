import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

export function Layout() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}