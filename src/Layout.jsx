import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CartImageSlots } from "@/components/CartImageSlots";
import { useImageLoader } from "@/hooks/useImageLoader";

export function Layout({ children }) {
  const mainRef = useRef(null);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useImageLoader(mainRef, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <CartDrawer />
      <main ref={mainRef} className="flex-1">
        {children}
      </main>
      <Footer />
      <CartImageSlots />
    </div>
  );
}

export default Layout;
