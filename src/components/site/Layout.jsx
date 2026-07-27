import React from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-surface-50 text-ink-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
