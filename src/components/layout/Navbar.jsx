import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?collection=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totals } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // For editorial pages, we want a transparent navbar that turns solid on scroll.
  // Other pages start solid.
  const isEditorial = location.pathname === "/";
  const transparent = isEditorial && !scrolled && !mobileOpen;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial",
        transparent
          ? "bg-transparent text-cream"
          : "bg-cream/95 text-ink backdrop-blur-sm border-b border-hairline",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-6 md:h-20 md:px-10 lg:px-16">
        {/* Left: Logo */}
        <Link
          to="/"
          aria-label="Velmora home"
          className="font-serif text-xl tracking-[0.32em] font-light md:text-2xl"
        >
          VELMORA
        </Link>

        {/* Center: Links (desktop) */}
        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                [
                  "font-sans text-[12px] tracking-[0.28em] uppercase transition-colors duration-300",
                  isActive ? "text-gold" : transparent ? "text-cream/85 hover:text-cream" : "text-ink/80 hover:text-ink",
                ].join(" ")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            aria-label="Search"
            className={[
              "p-2 transition-colors duration-300",
              transparent ? "hover:text-gold-soft" : "hover:text-gold",
            ].join(" ")}
          >
            <Search className="h-5 w-5" strokeWidth={1.25} />
          </button>
          <button
            type="button"
            aria-label={`Open cart (${totals.itemCount} items)`}
            onClick={openCart}
            className={[
              "relative p-2 transition-colors duration-300",
              transparent ? "hover:text-gold-soft" : "hover:text-gold",
            ].join(" ")}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.25} />
            {totals.itemCount > 0 && (
              <span
                aria-hidden="true"
                className={[
                  "absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center px-1 font-sans text-[9px] font-medium tracking-wide",
                  transparent ? "bg-cream text-espresso" : "bg-espresso text-cream",
                ].join(" ")}
              >
                {totals.itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((s) => !s)}
            className={[
              "p-2 md:hidden",
              transparent ? "hover:text-gold-soft" : "hover:text-gold",
            ].join(" ")}
          >
            {mobileOpen ? <X className="h-5 w-5" strokeWidth={1.25} /> : <Menu className="h-5 w-5" strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-hairline bg-cream text-ink">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  [
                    "py-3 font-sans text-[12px] tracking-[0.28em] uppercase",
                    isActive ? "text-gold" : "text-ink/80",
                  ].join(" ")
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
