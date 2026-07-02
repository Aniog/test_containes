import { Navbar } from "./Navbar";
import { CartDrawer } from "./CartDrawer";
import { Footer } from "./Footer";

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream font-sans text-espresso">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
