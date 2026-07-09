import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import CartDrawer from "./layout/CartDrawer";
import ScrollToTop from "./common/ScrollToTop";
import { Toaster } from "sonner";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default Layout;
