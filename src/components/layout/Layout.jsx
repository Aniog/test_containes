import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar.jsx";
import AnnouncementBar from "@/components/layout/AnnouncementBar.jsx";
import Footer from "@/components/layout/Footer.jsx";
import CartDrawer from "@/components/layout/CartDrawer.jsx";
import { Toaster } from "@/components/ui/sonner.jsx";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // The announcement bar is hidden on the home page (hero is full-bleed at the top)
  const showAnnouncement = pathname !== "/";

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-ink-800">
      <Toaster position="bottom-center" richColors closeButton />
      <Navbar />
      {showAnnouncement && <div className="h-9 sm:h-10" aria-hidden />}
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
