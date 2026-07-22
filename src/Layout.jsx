import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CartDrawer from "@/components/CartDrawer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-noir font-sans text-cream">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#211B16",
            border: "1px solid #332A21",
            color: "#F5EFE5",
          },
        }}
      />
    </div>
  );
}
