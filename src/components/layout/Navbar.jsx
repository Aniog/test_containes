import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop/earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Hero is on home; transparent navbar only over hero
  const isHome = location.pathname === "/";
  const useTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out",
        useTransparent
          ? "bg-transparent text-ivory"
          : "bg-ivory/95 backdrop-blur-md text-ink border-b border-hairline",
      )}
    >
      <div className="max-w-container mx-auto px-5 md:px-10 h-16 md:h-20 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="md:hidden -ml-2 p-2 justify-self-start"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <Link
          to="/"
          aria-label="Velmora home"
          className="font-serif text-xl md:text-2xl tracking-[0.3em] justify-self-start md:justify-self-center"
        >
          VELMORA
        </Link>

        {/* Center links */}
        <nav className="hidden md:flex items-center gap-9 justify-self-center">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-[12px] uppercase tracking-editorial transition-opacity duration-200 hover:opacity-60",
                  isActive && "opacity-100",
                  !isActive && "opacity-90",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 md:gap-4 justify-self-end">
          <button
            aria-label="Search"
            className="hidden sm:inline-flex p-2 hover:opacity-60 transition-opacity"
          >
            <Search className="w-5 h-5" strokeWidth={1.4} />
          </button>
          <button
            aria-label={`Open cart (${count} items)`}
            onClick={openCart}
            className="relative p-2 hover:opacity-60 transition-opacity"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.4} />
            {count > 0 && (
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 text-[10px] font-medium w-4 h-4 rounded-full grid place-items-center",
                  useTransparent
                    ? "bg-ivory text-ink"
                    : "bg-ink text-ivory",
                )}
                aria-hidden
              >
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-[80%] max-w-sm bg-ivory text-ink shadow-2xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-hairline">
            <span className="font-serif text-lg tracking-[0.3em]">VELMORA</span>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="font-serif text-2xl"
              >
                {l.label}
              </NavLink>
            ))}
            <div className="h-px bg-hairline my-2" />
            <NavLink to="/about" className="text-sm uppercase tracking-editorial text-muted">
              Our Story
            </NavLink>
            <NavLink to="/journal" className="text-sm uppercase tracking-editorial text-muted">
              Journal
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
