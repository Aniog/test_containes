import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-parchment/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-site mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl font-medium tracking-wide-heading text-ink order-0 md:order-none"
        >
          VELMORA
        </Link>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Shop", to: "/shop" },
            { label: "Collections", to: "/shop" },
            { label: "About", to: "/#about" },
            { label: "Journal", to: "/#journal" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-sans font-medium tracking-wide text-slate hover:text-gold transition-colors duration-200 uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="text-slate hover:text-gold transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <button
            className="relative text-slate hover:text-gold transition-colors"
            onClick={toggleCart}
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-ink text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-parchment border-t border-cream px-4 pb-6 pt-4">
          {[
            { label: "Shop", to: "/shop" },
            { label: "Collections", to: "/shop" },
            { label: "About", to: "/#about" },
            { label: "Journal", to: "/#journal" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-sans font-medium tracking-wide text-slate hover:text-gold transition-colors uppercase border-b border-cream last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
