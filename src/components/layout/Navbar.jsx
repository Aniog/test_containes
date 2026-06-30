import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext.jsx";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

/**
 * Sticky navbar.
 * - Sits transparent over the hero and turns into a solid cream bar with a
 *   hairline divider once the user scrolls past 40px.
 * - Mobile: center links collapse into a slide-down panel triggered from the
 *   hamburger icon. Search becomes a button that toggles a full-width
 *   search bar in the mobile sheet.
 */
export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Use scroll listener for transparent -> solid transition.
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close the mobile menu on every route change.
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [mobileOpen]);

  // The home page uses a transparent-over-hero navbar; other pages always
  // show the solid bar. We detect "is this the homepage" by route.
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out",
          transparent
            ? "bg-transparent"
            : "bg-cream/95 backdrop-blur-md border-b border-line",
        ].join(" ")}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: hamburger on mobile, logo on desktop */}
            <div className="flex items-center gap-3 md:gap-6 flex-1">
              <button
                type="button"
                className="md:hidden p-1 -ml-1"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X
                    strokeWidth={1.5}
                    className={`w-6 h-6 ${transparent ? "text-cream" : "text-ink"}`}
                  />
                ) : (
                  <Menu
                    strokeWidth={1.5}
                    className={`w-6 h-6 ${transparent ? "text-cream" : "text-ink"}`}
                  />
                )}
              </button>
              <Link
                to="/"
                className={`font-serif text-2xl md:text-[26px] tracking-[0.32em] font-light ${
                  transparent ? "text-cream" : "text-ink"
                }`}
                aria-label="Velmora — home"
              >
                VELMORA
              </Link>
            </div>

            {/* Center: nav links (desktop) */}
            <nav className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    [
                      "font-sans text-xs tracking-[0.24em] uppercase transition-colors duration-300",
                      transparent
                        ? "text-cream hover:text-cream/70"
                        : isActive
                        ? "text-gold"
                        : "text-ink hover:text-gold",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: search + cart */}
            <div className="flex items-center justify-end gap-1 md:gap-4 flex-1">
              <button
                type="button"
                className={`p-2 hidden md:inline-flex transition-colors duration-300 ${
                  transparent ? "text-cream hover:text-cream/70" : "text-ink hover:text-gold"
                }`}
                aria-label="Search"
              >
                <Search strokeWidth={1.5} className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={openCart}
                className={`p-2 relative transition-colors duration-300 ${
                  transparent ? "text-cream hover:text-cream/70" : "text-ink hover:text-gold"
                }`}
                aria-label={`Open cart, ${itemCount} items`}
              >
                <ShoppingBag strokeWidth={1.5} className="w-5 h-5" />
                {itemCount > 0 && (
                  <span
                    className={`absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center rounded-full text-[10px] font-medium tracking-normal ${
                      transparent
                        ? "bg-cream text-ink"
                        : "bg-ink text-cream"
                    }`}
                  >
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile slide-down panel */}
      <div
        className={[
          "fixed inset-x-0 top-16 z-30 md:hidden bg-cream border-b border-line transition-all duration-500 ease-out",
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <div className="container-wide py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "block py-3 font-sans text-sm tracking-[0.24em] uppercase border-b border-line-soft",
                  isActive ? "text-gold" : "text-ink",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className="flex items-center gap-2 font-sans text-sm tracking-[0.24em] uppercase text-ink hover:text-gold"
            >
              <Search strokeWidth={1.5} className="w-4 h-4" />
              Search
            </button>
          </div>
          {searchOpen && (
            <input
              type="search"
              placeholder="Search the collection"
              className="mt-3 input-line"
              autoFocus
            />
          )}
        </div>
      </div>
    </>
  );
}
