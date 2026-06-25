import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useStrkImages } from "@/components/ui/StrkImage";
import { useResolvedStrkImages } from "@/components/ui/useResolvedStrkImages";

export function Layout({ children }) {
  const location = useLocation();
  const mainRef = useRef(null);
  useStrkImages(mainRef, [location.pathname]);
  useResolvedStrkImages(mainRef, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const t = window.setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
        return () => window.clearTimeout(t);
      }
    }
  }, [location.hash]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-brand-ink">
      <Header />
      <main ref={mainRef} className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
