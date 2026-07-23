import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export function Layout({ children }) {
  const { totalItems, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-cream">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-500 ease-luxury",
          scrolled || !isHome
            ? "bg-cream/95 backdrop-blur-sm border-b border-taupe py-3"
            : "bg-transparent py-5",
          scrolled || !isHome ? "text-espresso" : "text-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <button
            type="button"
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link
            to="/"
            className="font-serif text-xl md:text-2xl uppercase tracking-[0.25em] font-medium"
          >
            Velmora
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs uppercase tracking-widest hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              className="p-2 hover:text-gold transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              aria-label="Open cart"
              className="relative p-2 hover:text-gold transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-white text-[10px] flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-cream transform transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex items-center justify-between border-b border-taupe">
          <span className="font-serif text-xl uppercase tracking-[0.25em]">Velmora</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-serif text-2xl text-espresso"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <main>{children}</main>
      <CartDrawer />
    </div>
  );
}
