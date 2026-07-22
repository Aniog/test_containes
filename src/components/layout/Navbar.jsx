import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useScrollFlag } from "@/hooks/useScrollFlag";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const { totals, openCart } = useCart();
  const scrolled = useScrollFlag(32);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isHeroPage = location.pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          scrolled || !isHeroPage || mobileOpen
            ? "bg-cream/95 backdrop-blur-md border-b border-hairline"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-editorial">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu trigger */}
            <button
              type="button"
              className="md:hidden -ml-2 p-2 text-ink"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" strokeWidth={1.4} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-[26px] tracking-[0.32em] text-ink"
              aria-label="Velmora home"
            >
              VELMORA
            </Link>

            {/* Center nav */}
            <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
              {navLinks.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "text-[12px] uppercase tracking-widest-2 text-ink/80 hover:text-ink relative",
                      "after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:bg-ink after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
                      "hover:after:scale-x-100",
                      isActive && l.to === "/shop" && "after:scale-x-100"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-1 md:gap-2">
              <button
                type="button"
                className="p-2 text-ink hover:text-accent-deep transition-colors"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </button>
              <button
                type="button"
                className="relative p-2 text-ink hover:text-accent-deep transition-colors"
                aria-label="Open cart"
                onClick={openCart}
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
                {totals.count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 inline-flex items-center justify-center rounded-full bg-ink text-cream text-[9px] font-medium">
                    {totals.count}
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
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-[360px] bg-cream shadow-2xl",
            "flex flex-col transition-transform duration-500 ease-out",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-hairline">
            <span className="font-serif text-xl tracking-[0.32em] text-ink">VELMORA</span>
            <button
              type="button"
              className="p-2 -mr-2 text-ink"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex-1 px-5 py-8 flex flex-col gap-6" aria-label="Mobile">
            {navLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="font-serif text-3xl text-ink"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-5 py-6 border-t border-hairline">
            <p className="eyebrow mb-3">Customer care</p>
            <a
              href="mailto:hello@velmora.com"
              className="font-sans text-sm text-ink-muted"
            >
              hello@velmora.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
