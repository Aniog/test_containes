import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  // Homepage uses transparent nav that turns solid on scroll.
  // Other pages use solid nav from the start.
  const headerTone = pathname === "/" ? "transparent" : "solid";

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header tone={headerTone} />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
