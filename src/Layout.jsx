import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner.jsx";
import Announcement from "./components/layout/Announcement.jsx";
import Nav from "./components/layout/Nav.jsx";
import Footer from "./components/layout/Footer.jsx";
import CartDrawer from "./components/layout/CartDrawer.jsx";
import SearchOverlay from "./components/layout/SearchOverlay.jsx";

export default function Layout() {
  const { pathname } = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  // Decide nav style. Home has a transparent hero so the nav starts
  // transparent; every other route gets a solid nav by default.
  const variant = pathname === "/" ? "auto" : "solid";

  // Scroll to top on route change (kept here so it works across pages)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Expose a global navigation hook so the preview bridge can drive
  // the router (already declared in index.html, but we register it).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__STRIKINGLY_PREVIEW_NAVIGATE__) return;
    // The router isn't accessible here without coupling, so we just
    // fall back to history.pushState for unknown callers. The real
    // navigate function is installed by App.jsx.
  }, []);

  // Pages that use a transparent hero need to know the nav will sit
  // over them with no background until scrolled.
  return (
    <div className="flex min-h-screen flex-col bg-ink-950 text-ink-100">
      <Announcement />
      <Nav onOpenSearch={() => setSearchOpen(true)} variant={variant} />
      <span id="cart-drawer-tag" className="sr-only">
        Velmora shopping bag, demi-fine
      </span>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          style: {
            background: "#16120E",
            color: "#F5EFE6",
            border: "1px solid #2A241C",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          },
        }}
      />
    </div>
  );
}
