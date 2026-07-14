import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ variant = "transparent" }) {
  const scrolled = useScrollPosition(40);
  const { summary, openCart } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // If on a page that isn't the home page, the nav should never be
  // transparent — it should always be solid.
  const isTransparent = variant === "transparent" && !scrolled && location.pathname === "/";

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-editorial",
          isTransparent
            ? "bg-transparent"
            : "bg-ivory/95 backdrop-blur-sm border-b border-mist/60"
        )}
      >
        <div className="container-editorial flex h-16 items-center justify-between md:h-20">
          {/* Left: logo */}
          <Link
            to="/"
            className="flex items-center"
            aria-label="Velmora — home"
          >
            <span
              className={cn(
                "font-serif text-2xl tracking-[0.32em] md:text-[26px]",
                isTransparent ? "text-ivory" : "text-charcoal"
              )}
            >
              VELMORA
            </span>
          </Link>

          {/* Center: nav links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "nav-link",
                    isTransparent ? "is-transparent" : "",
                    isActive && !isTransparent && "text-charcoal",
                    isActive && isTransparent && "text-ivory"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center transition-colors",
                isTransparent
                  ? "text-ivory hover:text-ivory/80"
                  : "text-charcoal hover:text-gold-deep"
              )}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart (${summary.count} items)`}
              className={cn(
                "relative inline-flex h-10 w-10 items-center justify-center transition-colors",
                isTransparent
                  ? "text-ivory hover:text-ivory/80"
                  : "text-charcoal hover:text-gold-deep"
              )}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {summary.count > 0 && (
                <span
                  className={cn(
                    "absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 font-sans text-[10px] font-medium",
                    isTransparent
                      ? "bg-ivory text-charcoal"
                      : "bg-charcoal text-ivory"
                  )}
                >
                  {summary.count}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center md:hidden",
                isTransparent ? "text-ivory" : "text-charcoal"
              )}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-charcoal/40 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-0 top-0 origin-top bg-ivory transition-transform duration-300 ease-editorial",
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="container-editorial flex h-16 items-center justify-between">
            <span className="font-serif text-2xl tracking-[0.32em] text-charcoal">
              VELMORA
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center text-charcoal"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="container-editorial flex flex-col gap-2 pb-12 pt-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="border-b border-mist/60 py-4 font-serif text-2xl text-charcoal"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Search overlay */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState("");
  useEffect(() => {
    if (open) {
      setQ("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-charcoal/40 animate-fade"
      onClick={onClose}
    >
      <div
        className="mt-24 w-full max-w-2xl bg-ivory px-8 py-10 shadow-editorial-md animate-rise"
        onClick={(e) => e.stopPropagation()}
      >
        <label className="eyebrow block">Search</label>
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="What are you looking for?"
          className="mt-3 w-full border-b border-charcoal bg-transparent py-3 font-serif text-2xl text-charcoal placeholder:text-mocha/60 focus:outline-none"
        />
        <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-product text-mocha">
          <span>Try</span>
          {["Huggies", "Flora Necklace", "Gift sets", "Ear cuffs"].map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => setQ(term)}
              className="border border-mist px-3 py-1.5 transition-colors hover:border-charcoal hover:text-charcoal"
            >
              {term}
            </button>
          ))}
        </div>
        <p className="mt-8 font-sans text-[12px] text-mocha">
          Press Esc to close
        </p>
      </div>
    </div>
  );
}
