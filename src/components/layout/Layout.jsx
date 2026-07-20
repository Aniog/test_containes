import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-espresso">
      <Navbar />
      <CartDrawer />
      <main className="flex-1 pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
