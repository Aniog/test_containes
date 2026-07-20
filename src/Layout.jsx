import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { Toaster } from "@/components/ui/sonner";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-bone">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster
        position="top-center"
        toastOptions={{
          classNames: {
            toast:
              "bg-ink text-bone border border-bone/10 rounded-none font-sans text-sm",
            title: "text-bone",
            description: "text-bone/70",
          },
        }}
      />
    </div>
  );
}
