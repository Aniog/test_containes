import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import CartDrawer from "../../components/cart/CartDrawer";

export default function Layout({ children }) {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <CartDrawer />
        <main>{children}</main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
