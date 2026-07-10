import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { summary, openCart } = useCart();
  const location = useLocation();

  // Solid bar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  // Transparent on home; solid everywhere else
  const transparent = !scrolled && location.pathname === "/";

  const textColor = transparent ? "text-cream" : "text-ink";
  const subTextColor = transparent ? "text-cream/80" : "text-taupe";
  const barBg = transparent
    ? "bg-transparent"
    : "bg-cream/95 backdrop-blur-md border-b border-hairline";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-elegant",
          barBg
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: hamburger (mobile) / nav (desktop) */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={cn("md:hidden p-2 -ml-2", textColor)}
              >
                <span className="block w-5 h-px bg-current" />
                <span className="block w-5 h-px bg-current mt-1.5" />
                <span className="block w-3 h-px bg-current mt-1.5" />
              </button>
              <nav className="hidden md:flex items-center gap-8">
                {links.map((l) => (
                  <NavLink
                    key={l.label}
                    to={l.to}
                    className={({ isActive }) =>
                      cn(
                        "text-[11px] uppercase tracking-widest2 font-medium transition-colors duration-300",
                        textColor,
                        "hover:opacity-70",
                        isActive && "opacity-100"
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Center: logo */}
            <Link
              to="/"
              className={cn(
                "font-serif text-xl md:text-2xl tracking-[0.32em] absolute left-1/2 -translate-x-1/2 transition-colors duration-500",
                textColor
              )}
              aria-label="Velmora home"
            >
              VELMORA
            </Link>

            {/* Right: search + cart */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen((s) => !s)}
                className={cn("p-2 transition-colors", textColor, "hover:opacity-70")}
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Open cart"
                onClick={openCart}
                className={cn("p-2 relative transition-colors", textColor, "hover:opacity-70")}
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
                {summary.count > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 text-[9px] font-medium flex items-center justify-center",
                      transparent ? "bg-cream text-ink" : "bg-ink text-cream"
                    )}
                  >
                    {summary.count}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search dropdown */}
          {searchOpen && (
            <div className="border-t border-hairline bg-cream py-4 anim-fade-in">
              <div className="container-wide flex items-center gap-3">
                <Search className="w-4 h-4 text-taupe" strokeWidth={1.5} />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search jewelry, collections, gifts…"
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-taupe text-ink"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-taupe hover:text-ink p-1"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/60"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute top-0 left-0 h-full w-[88%] max-w-sm bg-cream shadow-2xl flex flex-col transition-transform duration-500 ease-elegant",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
            <span className="font-serif text-lg tracking-[0.32em] text-ink">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2 text-ink"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-3xl py-3 text-ink transition-colors",
                    isActive && "text-gold-600"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="hairline my-6" />
            <NavLink
              to="/account"
              className="text-[11px] uppercase tracking-widest2 text-taupe py-2"
            >
              Account
            </NavLink>
            <NavLink
              to="/contact"
              className="text-[11px] uppercase tracking-widest2 text-taupe py-2"
            >
              Contact
            </NavLink>
          </nav>
        </aside>
      </div>
    </>
  );
}
