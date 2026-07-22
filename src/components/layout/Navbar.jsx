import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  // Over the homepage hero we start transparent (light text); everywhere else
  // (or once scrolled) we use the solid ivory bar with dark text.
  const transparent = isHome && !scrolled && !menuOpen && !searchOpen;

  const q = query.trim().toLowerCase();
  const results = q
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.short.toLowerCase().includes(q),
      ).slice(0, 5)
    : [];

  const submitSearch = (e) => {
    e.preventDefault();
    if (!q) return;
    setSearchOpen(false);
    setQuery("");
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-cream/95 shadow-soft backdrop-blur-md border-b border-line",
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3">
          <button
            className={cn(
              "md:hidden p-2 -ml-2 transition-colors",
              transparent ? "text-cream" : "text-ink",
            )}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            to="/"
            className={cn(
              "font-display text-xl md:text-2xl font-semibold tracking-[0.28em] transition-colors",
              transparent ? "text-cream" : "text-ink",
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "font-sans text-[13px] font-medium uppercase tracking-luxe transition-colors relative",
                  transparent
                    ? "text-cream/90 hover:text-cream"
                    : "text-inkSoft hover:text-ink",
                  isActive && (transparent ? "text-cream" : "text-gold"),
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: search + cart */}
        <div className="flex items-center gap-1 md:gap-2">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className={cn(
              "p-2 transition-colors",
              transparent
                ? "text-cream hover:text-goldSoft"
                : "text-ink hover:text-gold",
            )}
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>
          <button
            aria-label="Open cart"
            onClick={openCart}
            className={cn(
              "relative p-2 transition-colors",
              transparent
                ? "text-cream hover:text-goldSoft"
                : "text-ink hover:text-gold",
            )}
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-line bg-cream px-5 py-4 animate-fade-in">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "block py-3 font-sans text-sm font-medium uppercase tracking-luxe text-ink border-b border-line last:border-0",
                      isActive && "text-gold",
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Search panel */}
      {searchOpen && (
        <div className="border-t border-line bg-cream px-5 py-5 animate-fade-in sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={submitSearch} className="flex items-center gap-3 border-b border-ink/20 pb-3">
              <Search size={18} className="flex-shrink-0 text-gold" />
              <input
                ref={searchInputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search earrings, necklaces, huggies…"
                className="w-full bg-transparent font-display text-lg text-ink placeholder:text-inkSoft/60 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Submit search"
                className="flex-shrink-0 text-gold transition-transform hover:translate-x-0.5"
              >
                <ArrowRight size={18} />
              </button>
            </form>
            {q && (
              <ul className="mt-3 flex flex-col">
                {results.length === 0 ? (
                  <li className="py-4 text-sm text-inkSoft">
                    No pieces found for “{query}”.
                  </li>
                ) : (
                  results.map((p) => (
                    <li key={p.id}>
                      <Link
                        to={`/product/${p.id}`}
                        className="group flex items-center justify-between gap-4 border-b border-line py-3 last:border-0"
                      >
                        <div>
                          <p className="font-display text-sm font-semibold uppercase tracking-luxe text-ink group-hover:text-gold">
                            {p.name}
                          </p>
                          <p className="text-xs text-inkSoft">{p.category}</p>
                        </div>
                        <span className="font-sans text-sm font-semibold text-ink">
                          {formatPrice(p.price)}
                        </span>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
