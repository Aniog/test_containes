import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Restores the window scroll position when navigating between routes.
 * Top of page on first load; remembers per-path scroll position on back/forward.
 *
 * This is a small replacement for react-router's <ScrollRestoration />,
 * which only works inside a DataRouter (createBrowserRouter + RouterProvider)
 * and throws when used with the legacy <BrowserRouter> + <Routes> setup.
 */
const positions = new Map();
const SCROLL_KEY = "__velmora_scroll_restored__";

export default function useScrollRestoration() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isFirstLoad = !window[SCROLL_KEY];
    if (isFirstLoad) {
      window[SCROLL_KEY] = true;
    }

    let targetY = 0;
    if (!isFirstLoad) {
      const saved = positions.get(pathname);
      if (typeof saved === "number") targetY = saved;
    }

    const id = window.requestAnimationFrame(() => {
      window.scrollTo({ top: targetY, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(id);
  }, [pathname, key]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let frame = null;
    const onScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        positions.set(pathname, window.scrollY);
        frame = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);
}
