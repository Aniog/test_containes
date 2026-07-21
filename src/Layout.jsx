import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import { useCart } from "@/context/CartContext";
import { useStrkImages } from "@/hooks/useStrkImages";

export default function Layout() {
  const { pathname } = useLocation();
  const { isCartOpen, lineItems } = useCart();
  const layoutRef = useStrkImages([pathname, isCartOpen, lineItems.length]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div ref={layoutRef} className="min-h-screen bg-ivory font-sans text-noir">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
