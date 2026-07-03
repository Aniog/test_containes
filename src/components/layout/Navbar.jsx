import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Transparent over hero on homepage top; solid elsewhere
  const solid = scrolled || !isHome || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxury",
        solid
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(226,216,200,0.8)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-editorial items-center justify-between px-5 py-4 md:px-10 md:py-5">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={22} className={solid ? "text-ink" : "text-cream"} />
            ) : (
              <Menu size={22} className={solid ? "text-ink" : "text-cream"} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-widest3 md:text-3xl transition-colors",
              solid ? "text-ink" : "text-cream"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "font-sans text-[11px] uppercase tracking-widest2 transition-colors hover:text-gold",
                solid ? "text-ink" : "text-cream"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn("transition-colors hover:text-gold", solid ? "text-ink" : "text-cream")}
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn("relative transition-colors hover:text-gold", solid ? "text-ink" : "text-cream")}
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 font-sans text-[9px] font-medium text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-hairline bg-cream md:hidden">
          <div className="flex flex-col px-5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="border-b border-hairline py-4 font-sans text-xs uppercase tracking-widest2 text-ink last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
