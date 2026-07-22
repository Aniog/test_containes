import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, toggleCart } = useCart();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Shop", to: "/shop" },
    { label: "Collections", to: "/shop" },
    { label: "About", to: "/about" },
    { label: "Journal", to: "/journal" },
  ];

  const textColor = isHome && !scrolled ? "text-white" : "text-velmora-base";
  const bg = isHome && !scrolled ? "bg-transparent" : "bg-velmora-cream/95 backdrop-blur-md shadow-sm";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-lux",
        bg,
        textColor
      )}
    >
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 h-16 md:h-20">
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <Link
          to="/"
          className="font-serif text-xl md:text-2xl tracking-wide font-medium"
        >
          VELMORA
        </Link>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-5">
          <button aria-label="Search" className="p-1 hover:text-velmora-gold transition-colors">
            <Search size={20} />
          </button>
          <button
            onClick={toggleCart}
            aria-label={`Cart with ${count} items`}
            className="relative p-1 hover:text-velmora-gold transition-colors"
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-velmora-cream text-velmora-base transform transition-transform duration-300 ease-lux md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-velmora-hairline">
          <span className="font-serif text-xl tracking-wide">VELMORA</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-serif"
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
