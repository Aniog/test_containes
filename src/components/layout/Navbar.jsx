import { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop?category=earrings" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, toggleCart } = useCart();
  const location = useLocation();
  const navRef = useRef(null);

  const isHome = location.pathname === "/";
  const overDarkHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300",
        scrolled || !isHome
          ? "bg-velmora-cream/95 backdrop-blur-md border-b border-velmora-sand shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <button
          className={cn(
            "md:hidden p-2 -ml-2 pointer-events-auto transition-colors",
            overDarkHero ? "text-white hover:text-white/80" : "text-velmora-ink hover:text-velmora-gold",
          )}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                "text-xs font-medium uppercase tracking-[0.18em] transition-colors",
                overDarkHero
                  ? "text-white/80 hover:text-white"
                  : "text-velmora-ink/80 hover:text-velmora-gold",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          className={cn(
            "font-serif text-xl md:text-2xl tracking-[0.12em] uppercase pointer-events-auto transition-colors",
            overDarkHero ? "text-white" : "text-velmora-ink",
          )}
        >
          Velmora
        </Link>

        <div className="flex items-center gap-3 md:gap-5 pointer-events-auto">
          <button
            aria-label="Search"
            className={cn(
              "p-2 transition-colors",
              overDarkHero ? "text-white hover:text-white/80" : "text-velmora-ink hover:text-velmora-gold",
            )}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={toggleCart}
            className={cn(
              "relative p-2 transition-colors",
              overDarkHero ? "text-white hover:text-white/80" : "text-velmora-ink hover:text-velmora-gold",
            )}
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-medium text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-cream md:hidden pointer-events-auto">
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-serif text-xl tracking-[0.12em] uppercase">Velmora</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-serif text-2xl tracking-wide text-velmora-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
