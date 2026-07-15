import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext.jsx";
import { cn } from "@/lib/utils.js";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop?category=sets" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const { count, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const overHero = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-400",
        overHero
          ? "bg-transparent text-cream"
          : "bg-cream/95 backdrop-blur text-ink border-b border-ink/5 shadow-sm"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-widest-xl font-semibold"
        >
          VELMORA
        </Link>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-sans text-sm tracking-wide hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-5">
          <button aria-label="Search" className="p-2 hover:text-gold transition-colors">
            <Search size={20} />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 hover:text-gold transition-colors relative"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-ink text-[10px] font-bold rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute inset-x-0 top-full bg-cream text-ink border-b border-ink/10 transition-all duration-300 overflow-hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-sans text-sm tracking-wide uppercase"
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
