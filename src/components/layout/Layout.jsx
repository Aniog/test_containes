import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";

export default function Layout({ children, transparentNav = false }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar transparentOnTop={transparentNav} />
      <main className={transparentNav ? "" : "pt-16 md:pt-20"}>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
