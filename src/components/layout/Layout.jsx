import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";

/**
 * Layout — wraps every page with the sticky nav, footer, and cart drawer.
 * Also drives a single global ImageHelper scan for any data-strk-img /
 * data-strk-bg elements that mount anywhere in the app (e.g. background
 * images on the hero). The hero background lives outside the page-level
 * StrkImage wrapper, so this top-level scan is the safety net.
 */
export function Layout() {
  const rootRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node);
    });
    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div ref={rootRef} className="flex min-h-screen flex-col bg-cream text-ink">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default Layout;
