import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Reset scroll on route change so users always start at the top of a page. */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}
