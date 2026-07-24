import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartDrawer } from "../cart/CartDrawer";
import { CartProvider } from "../cart/CartContext";

export default function Layout({ children }) {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
