import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

/**
 * Layout wraps all routes.
 * - Home ("/") uses transparent-over-hero navbar (variant="auto")
 * - Other pages use solid navbar from the top
 * - Scrolls to top on route change
 * - Triggers a single image scan on root on each route change to catch
 *   any deferred-render stock image tags in page content
 */
export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const rootRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (rootRef.current) ImageHelper.loadImages(strkImgConfig, rootRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div ref={rootRef} className="flex flex-col min-h-screen bg-cream">
      <Navbar variant={isHome ? "auto" : "solid"} />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
