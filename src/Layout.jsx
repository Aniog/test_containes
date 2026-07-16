import CartDrawer from "@/components/cart/CartDrawer";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header />
      {children}
      <Footer />
      <CartDrawer />
    </div>
  );
}
