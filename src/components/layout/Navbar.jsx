import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop", label: "Collections", state: { from: "collections" } },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  const onDarkHero = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-ivory/95 backdrop-blur-md border-b border-line shadow-[0_10px_40px_-20px_rgba(23,19,16,0.25)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="relative flex items-center justify-between h-16 md:h-20">
            <button
              type="button"
              className={cn(
                "md:hidden p-2 -ml-2 transition-colors",
                onDarkHero ? "text-ivory" : "text-noir"
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>

            <Link
              to="/"
              className={cn(
                "font-serif text-xl md:text-2xl font-semibold tracking-[0.28em] uppercase transition-colors",
                onDarkHero ? "text-ivory" : "text-noir"
              )}
            >
              Velmora
            </Link>

            <nav className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  state={link.state}
                  className={cn(
                    "text-[11px] font-medium uppercase tracking-[0.24em] transition-colors duration-300 hover:text-gold",
                    onDarkHero ? "text-ivory/85" : "text-noir/80"
                  )}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-1 md:gap-3">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "p-2 transition-colors duration-300 hover:text-gold",
                  onDarkHero ? "text-ivory" : "text-noir"
                )}
              >
                <Search size={19} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Wishlist"
                className={cn(
                  "hidden md:block p-2 transition-colors duration-300 hover:text-gold",
                  onDarkHero ? "text-ivory" : "text-noir"
                )}
              >
                <Heart size={19} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Open cart"
                onClick={openCart}
                className={cn(
                  "relative p-2 transition-colors duration-300 hover:text-gold",
                  onDarkHero ? "text-ivory" : "text-noir"
                )}
              >
                <ShoppingBag size={19} strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-semibold text-ivory">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-noir/50"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-4/5 max-w-xs bg-ivory shadow-2xl transition-transform duration-500 ease-out",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-line px-6 h-16">
            <span className="font-serif text-lg font-semibold uppercase tracking-[0.28em] text-noir">
              Velmora
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2 text-noir"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.label}
                to={link.to}
                state={link.state}
                className={cn(
                  "border-b border-line py-4 font-serif text-2xl text-noir transition-colors hover:text-gold",
                  i === 0 && "pt-0"
                )}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <p className="px-6 text-[11px] uppercase tracking-[0.24em] text-taupe">
            Demi-fine jewelry, crafted to be treasured
          </p>
        </div>
      </div>
    </>
  );
}
