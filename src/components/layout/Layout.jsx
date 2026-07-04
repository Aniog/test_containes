import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
