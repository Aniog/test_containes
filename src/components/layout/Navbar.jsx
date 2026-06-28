import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?collection=bestsellers", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ transparentOnTop = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always solid on non-home pages
  const isHome = location.pathname === "/";
  const solid = !isHome || !transparentOnTop || scrolled;

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname, location.search]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[#F7F2EA]/95 backdrop-blur border-b border-[#1A1410]/10 text-[#1A1410]"
          : "bg-transparent text-[#F7F2EA]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3 flex-1">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="md:hidden -ml-2 p-2"
            >
              <Menu className="w-5 h-5" strokeWidth={1.25} />
            </button>
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-light"
              aria-label="Velmora home"
            >
              VELMORA
            </Link>
          </div>

          {/* Center nav (desktop) */}
          <nav className="hidden md:flex items-center justify-center gap-10 flex-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `text-[11px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                    isActive ? "text-[#B8924A]" : "hover:text-[#B8924A]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: search + cart */}
          <div className="flex items-center justify-end gap-3 md:gap-5 flex-1">
            <button
              type="button"
              aria-label="Search"
              className="p-2 hover:text-[#B8924A] transition-colors"
            >
              <Search className="w-5 h-5" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              aria-label={`Cart, ${count} items`}
              onClick={openCart}
              className="relative p-2 hover:text-[#B8924A] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.25} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#B8924A] text-[#F7F2EA] text-[10px] font-medium leading-[18px] text-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#1A1410]/40"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute inset-y-0 left-0 w-[82%] max-w-sm bg-[#F7F2EA] text-[#1A1410] p-8 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-serif text-2xl tracking-[0.25em]">VELMORA</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="p-2"
              >
                <X className="w-5 h-5" strokeWidth={1.25} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {LINKS.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="font-serif text-2xl tracking-wide"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
