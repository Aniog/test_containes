import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, count } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
  }, [location.pathname, mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
        scrolled || !isHome
          ? "bg-cream/95 backdrop-blur-md border-b border-stonehair"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={cn("w-5 h-5", isHome && !scrolled ? "text-cream" : "text-espresso")} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-widest uppercase",
              isHome && !scrolled ? "text-cream" : "text-espresso"
            )}
          >
            Velmora
          </Link>

          {/* Center links */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm tracking-wide uppercase hover:opacity-70 transition-opacity",
                    isHome && !scrolled ? "text-cream" : "text-espresso"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              type="button"
              className={cn(
                "p-2 transition-opacity hover:opacity-70",
                isHome && !scrolled ? "text-cream" : "text-espresso"
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className={cn(
                "p-2 transition-opacity hover:opacity-70 relative",
                isHome && !scrolled ? "text-cream" : "text-espresso"
              )}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute top-1 right-0.5 w-4 h-4 bg-accent text-white text-[10px] font-medium flex items-center justify-center rounded-full">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-cream z-40 flex flex-col transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-stonehair">
          <span className="font-serif text-2xl tracking-widest uppercase">
            Velmora
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <ul className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-serif text-3xl tracking-wide text-espresso"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
