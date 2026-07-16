import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <CartDrawer />
    </>
  );
}