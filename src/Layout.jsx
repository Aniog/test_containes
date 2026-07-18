import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top on route change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-ivory">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
