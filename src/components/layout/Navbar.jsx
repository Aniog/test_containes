import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ variant = "auto" }) {
  // variant: "auto" (transparent over hero, solid on scroll) or "solid" (always solid)
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totals } = useCart();
  const location = useLocation();

  useEffect(() => {
    if (variant === "solid") {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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

  const isSolid = variant === "solid" || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out-soft",
          isSolid
            ? "bg-cream/95 backdrop-blur-sm border-b border-ink/10 text-ink"
            : "bg-transparent text-bone"
        )}
      >
        <div className="container-shell">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: hamburger (mobile) + logo */}
            <div className="flex items-center gap-4 flex-1">
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-1 -ml-1"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" strokeWidth={1.25} />
              </button>
              <Link
                to="/"
                className="font-display text-xl md:text-2xl tracking-wider-2"
                aria-label="Velmora — Home"
              >
                VELMORA
              </Link>
            </div>

            {/* Center: nav links */}
            <nav className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "text-[11px] font-medium tracking-wider-3 uppercase transition-colors duration-300 relative",
                      "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-px after:transition-all after:duration-300",
                      isActive
                        ? "after:bg-champagne after:opacity-100"
                        : "after:bg-current after:opacity-0 hover:after:opacity-60",
                      isSolid ? "text-ink" : "text-bone"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: search + cart */}
            <div className="flex items-center gap-3 md:gap-5 flex-1 justify-end">
              <button
                aria-label="Search"
                className="p-1 hidden sm:inline-flex transition-opacity duration-300 hover:opacity-70"
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.25} />
              </button>
              <button
                onClick={openCart}
                aria-label="Open cart"
                className="p-1 relative transition-opacity duration-300 hover:opacity-70"
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.25} />
                {totals.count > 0 && (
                  <span
                    className={cn(
                      "absolute -top-1 -right-2 min-w-[16px] h-[16px] px-1 flex items-center justify-center text-[9px] font-medium tracking-wide",
                      isSolid
                        ? "bg-espresso text-cream"
                        : "bg-bone text-espresso"
                    )}
                  >
                    {totals.count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-espresso/60"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute top-0 left-0 h-full w-[85%] max-w-sm bg-cream text-ink flex flex-col transition-transform duration-500 ease-out-soft",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-ink/10">
            <span className="font-display text-xl tracking-wider-2">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-1">
              <X className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-10">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "py-4 text-2xl font-display border-b border-ink/10 flex items-center justify-between",
                    isActive && "text-champagne-deep"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-ink/10 text-[10px] tracking-wider-3 uppercase text-mute">
            Free shipping over $75
          </div>
        </aside>
      </div>
    </>
  );
}
