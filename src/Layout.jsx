import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";
import CartDrawer from "@/components/CartDrawer.jsx";
import Footer from "@/components/Footer.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink font-sans">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
