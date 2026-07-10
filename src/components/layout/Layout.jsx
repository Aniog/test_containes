import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import useScrollRestoration from "@/hooks/useScrollRestoration";

export default function Layout() {
  useScrollRestoration();

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
