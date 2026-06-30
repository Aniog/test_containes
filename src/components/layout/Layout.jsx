import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import CartDrawer from "./CartDrawer.jsx";

/**
 * Page chrome — navbar, footer, cart drawer, plus a window-scroll reset
 * on every route change so users land at the top of each new page.
 */
export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar />
      <main className="flex-1 pt-0">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
