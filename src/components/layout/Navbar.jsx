import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Logo from "@/components/layout/Logo";

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const { openCart, count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Reset mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Track scroll for nav background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero is the only section that has the "transparent over hero" requirement.
  // For all other routes the nav should always be solid.
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;
  const textColor = transparent ? "text-ivory" : "text-ink";
  const hoverColor = transparent
    ? "hover:text-gold-soft"
    : "hover:text-gold-deep";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-soft ${
          transparent
            ? "bg-transparent border-b border-transparent"
            : "bg-ivory/95 backdrop-blur-sm border-b border-stone"
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-7xl flex items-center justify-between h-16 md:h-20"
        >
          {/* Logo */}
          <Link to="/" className="shrink-0" aria-label="Velmora, home">
            <Logo light={transparent} />
          </Link>

          {/* Center links (desktop) */}
          <ul className="hidden md:flex items-center gap-10">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative text-[11px] uppercase tracking-eyebrow font-medium ${textColor} ${hoverColor} transition-colors ${
                      isActive ? "after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-px after:bg-gold" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Search"
              className={`hidden sm:inline-flex ${textColor} ${hoverColor} transition-colors`}
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label={`Open bag (${count} ${count === 1 ? "item" : "items"})`}
              onClick={openCart}
              className={`relative ${textColor} ${hoverColor} transition-colors`}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {count > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-1.5 -right-2 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center rounded-full bg-ink text-ivory text-[10px] font-medium tabular-nums"
                >
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
              className={`md:hidden ${textColor} ${hoverColor} transition-colors`}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-x-0 top-16 z-40 md:hidden bg-ivory border-b border-stone transition-all duration-300 ease-out-soft ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="container-7xl py-6 space-y-1">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block py-3 text-sm uppercase tracking-eyebrow font-medium ${
                    isActive ? "text-gold-deep" : "text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-3 border-t border-stone">
            <button
              type="button"
              className="flex items-center gap-2 py-3 text-sm uppercase tracking-eyebrow font-medium text-ink"
            >
              <Search className="w-4 h-4" strokeWidth={1.5} />
              Search
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
