import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";

export default function Layout({ children }) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-ivory text-espresso">
        <Navbar />
        <CartDrawer />
        <main className="pt-0">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}
