import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop?view=collections" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  // Treat the homepage as having a hero — nav is transparent on top there.
  const onHero = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const isTransparent = onHero && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        isTransparent
          ? "bg-transparent text-ivory"
          : "bg-ivory/95 backdrop-blur-md text-ink shadow-[0_1px_0_0_rgba(217,207,190,0.6)]",
      )}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Left — logo + mobile menu trigger */}
          <div className="flex items-center gap-3 flex-1">
            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden -ml-1 p-1"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <nav className="hidden md:flex items-center gap-8">
              {LINKS.slice(0, 2).map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-[11px] uppercase tracking-[0.22em] font-medium hover:text-champagne transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center — logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.32em] font-medium select-none"
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Right — nav + icons */}
          <div className="flex-1 flex items-center justify-end gap-5 md:gap-7">
            <nav className="hidden md:flex items-center gap-8">
              {LINKS.slice(2).map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-[11px] uppercase tracking-[0.22em] font-medium hover:text-champagne transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className="hover:text-champagne transition-colors"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative hover:text-champagne transition-colors"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-[16px] h-[16px] px-1 rounded-full bg-champagne text-ivory text-[10px] font-medium tracking-normal flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search drawer */}
        {searchOpen && (
          <div className="pb-4 border-t border-hairline pt-4">
            <input
              autoFocus
              type="text"
              placeholder="Search earrings, necklaces, huggies…"
              className={cn(
                "w-full bg-transparent border-b border-hairline focus:border-champagne outline-none py-2 text-sm placeholder:text-taupe",
                isTransparent ? "text-ivory placeholder:text-ivory/60 border-ivory/40" : "text-ink",
              )}
            />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory text-ink border-t border-hairline">
          <nav className="flex flex-col px-5 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="py-3 text-sm uppercase tracking-[0.22em] font-medium border-b border-hairline last:border-b-0 hover:text-champagne transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
