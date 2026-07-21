import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Header() {
  const { totals, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Transparent only on home. Solid on every other page or when scrolled.
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const textColor = transparent ? "text-cream" : "text-ink";
  const textMuted = transparent ? "text-cream/80" : "text-muted";
  const borderColor = transparent ? "border-cream/15" : "border-hairline";
  const bgColor = transparent ? "bg-transparent" : "bg-cream/95 backdrop-blur-md";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-velvet ${bgColor} ${textColor} border-b ${borderColor}`}
        style={{ transitionProperty: "background-color, color, border-color" }}
      >
        <div className="mx-auto max-w-editorial px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className={`md:hidden -ml-1 p-1 ${textColor}`}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          {/* Logo (left on desktop, center on mobile) */}
          <Link
            to="/"
            className={`font-display text-2xl md:text-[28px] tracking-[0.28em] ${textColor} absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0`}
            aria-label="Velmora Fine Jewelry home"
          >
            VELMORA
          </Link>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `eyebrow text-[0.7rem] link-underline ${isActive ? "text-champagne" : textMuted} hover:${textColor}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-5 ml-auto md:ml-0">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className={`p-1 ${textColor} hover:text-champagne transition-colors`}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className={`relative p-1 ${textColor} hover:text-champagne transition-colors`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totals.count > 0 && (
                <span className="absolute -top-0.5 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-champagne text-ink text-[10px] font-medium flex items-center justify-center">
                  {totals.count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search drawer */}
        {searchOpen && (
          <div className={`border-t ${borderColor} ${transparent ? "bg-ink/85 backdrop-blur-md" : "bg-cream"}`}>
            <div className="mx-auto max-w-editorial px-5 md:px-10 py-5 flex items-center gap-3">
              <Search size={16} strokeWidth={1.5} className={textMuted} />
              <input
                autoFocus
                type="search"
                placeholder="Search jewelry, collections, gifts…"
                className={`flex-1 bg-transparent outline-none text-sm ${textColor} placeholder:${textMuted}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSearchOpen(false);
                }}
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className={`p-1 ${textMuted} hover:${textColor}`}
                aria-label="Close search"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[78%] max-w-sm bg-cream animate-slide-in-right" style={{ animationDirection: "reverse" }}>
            <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
              <span className="font-display text-xl tracking-[0.28em] text-ink">VELMORA</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-1 text-ink"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="font-display text-3xl text-ink"
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <div className="px-6 mt-4 hairline" />
            <div className="px-6 py-6 flex flex-col gap-3 text-sm text-muted">
              <span>Free worldwide shipping over $80</span>
              <span>30-day returns on unworn pieces</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
