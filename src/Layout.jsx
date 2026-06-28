import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-espresso">
      <Header transparentOnTop={isHome} />
      <main className={isHome ? "" : "pt-16 md:pt-20"}>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
