import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Bridge: the host's preview iframe posts `route:navigate` events; we
  // forward them to react-router so deep-links work without a full reload.
  useEffect(() => {
    const onMessage = (event) => {
      const data = event.data;
      if (
        !data ||
        typeof data !== "object" ||
        data.channel !== "strikingly-preview" ||
        data.version !== 1
      ) {
        return;
      }
      if (data.type !== "route:navigate") return;
      const path = data.payload?.path;
      if (typeof path !== "string" || !path) return;
      navigate(path, { replace: Boolean(data.payload?.replace) });
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [navigate]);

  // Bridge: the host can also call window.__STRIKINGLY_PREVIEW_NAVIGATE__
  // directly. We translate those into router navigations.
  useEffect(() => {
    const onCustom = (event) => {
      const detail = event.detail || {};
      if (typeof detail.path === "string" && detail.path) {
        navigate(detail.path, { replace: Boolean(detail.options?.replace) });
      }
    };
    window.addEventListener("strikingly-preview-navigate", onCustom);
    return () =>
      window.removeEventListener("strikingly-preview-navigate", onCustom);
  }, [navigate]);

  // Scroll to top on route change for a clean editorial feel.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-cream-100 text-ink-300">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
