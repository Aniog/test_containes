import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";

export function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-velmora-cream text-velmora-ink">
      <Navbar />
      <main
        className={cn(
          "flex-1",
          !isHome && "pt-16 md:pt-20",
        )}
      >
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
