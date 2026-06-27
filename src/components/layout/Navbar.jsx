import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ transparentOnTop = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  const isTransparent = transparentOnTop && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isTransparent
          ? "bg-transparent text-cream"
          : "bg-cream/95 backdrop-blur-md text-ink border-b border-mist/30"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + desktop links */}
          <div className="flex items-center gap-8 flex-1">
            <button
              type="button"
              className="md:hidden -ml-1 p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <nav className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.2em] uppercase">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "transition-colors hover:text-gold",
                      isActive && "text-gold"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.35em] font-light flex-shrink-0"
            aria-label="Velmora — home"
          >
            VELMORA
          </Link>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-4 md:gap-5 flex-1">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              className="p-2 hover:text-gold transition-colors"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Cart (${count} items)`}
              className="p-2 relative hover:text-gold transition-colors"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-cream text-[10px] font-medium rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-5 animate-fade-in">
            <div className="border-b border-ink/40 focus-within:border-gold transition-colors">
              <input
                type="search"
                autoFocus
                placeholder="Search for earrings, necklaces, huggies…"
                className="w-full bg-transparent py-3 outline-none text-sm tracking-wide placeholder:text-current/50"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream text-ink border-t border-mist/30 animate-fade-in">
          <nav className="px-5 py-6 flex flex-col gap-5 text-[13px] tracking-[0.2em] uppercase">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-gold">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
