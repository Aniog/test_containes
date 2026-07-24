import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop", label: "Collections", state: { fromCollections: true } },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { count, openCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const darkHero = location.pathname === "/" || location.pathname === "/about";
  const solid = scrolled || !darkHero || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const submitSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-luxe",
        solid
          ? "border-b border-line-dark bg-ink/95 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <button
          className="text-ivory md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          to="/"
          className="font-serif text-2xl font-medium tracking-[0.3em] text-ivory transition-colors duration-300 hover:text-gold-soft md:text-[26px]"
        >
          VELMORA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              state={l.state}
              className="group relative text-[11px] font-medium uppercase tracking-[0.22em] text-ivory/85 transition-colors duration-300 hover:text-gold-soft"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-5">
          <button
            className="text-ivory transition-colors duration-300 hover:text-gold-soft"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            className="relative text-ivory transition-colors duration-300 hover:text-gold-soft"
            onClick={openCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-semibold text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-line-dark bg-ink/95 backdrop-blur-md animate-fade-in">
          <form
            onSubmit={submitSearch}
            className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-4"
          >
            <Search className="h-4 w-4 shrink-0 text-gold-soft" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earrings, huggies, necklaces…"
              className="w-full bg-transparent text-sm text-ivory placeholder:text-muted-dark/70 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 text-[11px] font-medium uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-soft"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {mobileOpen && (
        <nav className="border-t border-line-dark bg-ink/95 px-6 py-6 backdrop-blur-md animate-fade-in md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  state={l.state}
                  className="font-serif text-2xl text-ivory transition-colors hover:text-gold-soft"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
