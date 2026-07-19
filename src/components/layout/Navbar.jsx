import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?collection=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Hero overlay mode: the nav is transparent until you scroll OR
  // you're not on a page that starts with a dark hero.
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-velvet",
          transparent
            ? "bg-transparent text-bone"
            : "bg-bone/95 backdrop-blur-sm text-ink border-b border-line",
        )}
      >
        <div className="container-page flex items-center justify-between h-16 lg:h-20">
          {/* Mobile: burger */}
          <button
            type="button"
            className="lg:hidden -ml-2 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" strokeWidth={1.25} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl sm:text-[26px] tracking-[0.32em] font-light",
              "lg:flex-none lg:mr-10",
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "product-name text-[11px] link-underline transition-colors duration-300",
                    transparent
                      ? "text-bone/90 hover:text-bone"
                      : "text-ink/80 hover:text-ink",
                    isActive && (transparent ? "text-bone" : "text-ink"),
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              className="p-2.5 hover:opacity-70 transition-opacity"
              onClick={() => setSearchOpen((s) => !s)}
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              className="relative p-2.5 hover:opacity-70 transition-opacity"
              onClick={openCart}
              aria-label={`Open cart, ${itemCount} items`}
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.25} />
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center text-[9px] font-medium uppercase rounded-full transition-all duration-300",
                  itemCount > 0
                    ? "bg-ink text-bone"
                    : "bg-transparent text-transparent",
                  transparent && "border border-bone/40 text-bone",
                )}
              >
                {itemCount > 0 ? itemCount : ""}
              </span>
            </button>
          </div>
        </div>

        {/* Search dropdown */}
        <div
          className={cn(
            "overflow-hidden transition-[max-height,opacity] duration-500 ease-velvet",
            searchOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="container-page pb-5">
            <div className="border-b border-current/30 flex items-center gap-3">
              <Search className="w-4 h-4 opacity-70" strokeWidth={1.25} />
              <input
                type="text"
                autoFocus={searchOpen}
                placeholder="Search earrings, necklaces, huggies…"
                className="w-full bg-transparent py-2 text-sm placeholder:text-current/50 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-[88%] max-w-sm bg-bone text-ink shadow-card flex flex-col transition-transform duration-500 ease-velvet",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-line">
            <span className="font-serif text-xl tracking-[0.32em] font-light">
              VELMORA
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex-1 px-5 py-8 flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-3xl font-light py-2 link-underline",
                    isActive ? "text-ink" : "text-ink/70",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-5 py-6 border-t border-line text-xs text-taupe">
            <p className="eyebrow text-ink/70 mb-2">Velmora Atelier</p>
            <p>Lisbon · Paris · New York</p>
          </div>
        </aside>
      </div>
    </>
  );
}
