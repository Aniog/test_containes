import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";

export default function Layout({ children }) {
  const location = useLocation();

  // Scroll to top on route change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink">
      <Navbar />
      <main key={location.pathname} className="flex-1 fade-in-page">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
