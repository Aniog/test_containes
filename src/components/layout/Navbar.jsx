import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  // Home is the only page with a hero; everywhere else the nav is solid.
  const overHero = location.pathname === "/";

  useEffect(() => {
    if (!overHero) {
      setScrolled(true);
      return undefined;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  // Close mobile menu on route change.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll while mobile menu is open.
  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = !overHero || scrolled;
  const onLight = overHero && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          isSolid
            ? "bg-ivory/95 backdrop-blur-md border-b border-tan/40 text-ink"
            : "bg-transparent text-ivory"
        )}
      >
        <div className="container-editorial">
          <div className="grid grid-cols-3 items-center h-16 md:h-20">
            {/* Left: mobile menu + (spacer) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="md:hidden -ml-2 p-2"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
              <span className="hidden md:block text-[10px] uppercase tracking-eyebrow text-stone">
                Free shipping over $75
              </span>
            </div>

            {/* Center: logo */}
            <div className="flex items-center justify-center">
              <Link
                to="/"
                aria-label="Velmora home"
                className="font-serif text-[20px] md:text-[22px] tracking-logo font-medium"
              >
                VELMORA
              </Link>
            </div>

            {/* Right: links + icons */}
            <div className="flex items-center justify-end gap-5 md:gap-7">
              <nav className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "text-[11px] uppercase tracking-nav font-medium transition-colors",
                        onLight
                          ? isActive
                            ? "text-ivory"
                            : "text-ivory/85 hover:text-ivory"
                          : isActive
                            ? "text-ink"
                            : "text-mauve hover:text-ink"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <button
                type="button"
                aria-label="Search"
                className="p-2 -mr-2 transition-colors hover:text-gold-deep"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label={`Open cart (${itemCount} items)`}
                onClick={openCart}
                className="relative p-2 -mr-2 transition-colors hover:text-gold-deep"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1",
                      "flex items-center justify-center rounded-full",
                      "text-[10px] font-medium price leading-none",
                      onLight
                        ? "bg-ivory text-ink"
                        : "bg-gold text-ivory"
                    )}
                  >
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[88%] max-w-sm bg-ivory text-ink",
            "flex flex-col transition-transform duration-300 ease-drawer",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-tan/50">
            <Link to="/" className="font-serif text-[20px] tracking-logo font-medium">
              VELMORA
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="font-serif text-3xl text-ink hover:text-gold-deep transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-6 py-6 border-t border-tan/50 text-[12px] uppercase tracking-nav text-mauve space-y-2">
            <p>Free worldwide shipping over $75</p>
            <p>30-day returns · 18K gold plated</p>
          </div>
        </aside>
      </div>
    </>
  );
}
