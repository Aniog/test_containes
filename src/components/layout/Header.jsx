import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export default function Header({ tone = "transparent" }) {
  // "transparent" mode (over hero) becomes solid espresso on scroll.
  // "solid" mode is always espresso (used on inner pages).
  const scrolled = useScrolled(40);
  const { itemCount, open: openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const onHero = tone === "transparent" && !scrolled;
  const navClass = onHero ? "nav-link-on-dark" : "nav-link";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial",
          onHero
            ? "bg-transparent"
            : "bg-ivory/95 backdrop-blur-sm border-b border-hairline"
        )}
      >
        <div className="container-velmora">
          <div className="h-16 md:h-20 grid grid-cols-[1fr_auto_1fr] items-center">
            {/* Mobile menu trigger */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "p-2 -ml-2 transition-colors",
                  onHero ? "text-ivory" : "text-espresso"
                )}
              >
                <Menu className="w-5 h-5" strokeWidth={1.25} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center md:justify-start">
              <Link
                to="/"
                className={cn(
                  "font-serif text-2xl md:text-[26px] tracking-[0.3em] font-light transition-colors",
                  onHero ? "text-ivory" : "text-espresso"
                )}
                aria-label="Velmora — home"
              >
                VELMORA
              </Link>
            </div>

            {/* Center nav (desktop) */}
            <nav className="hidden md:flex items-center justify-center gap-10">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(navClass, isActive && "after:w-full")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center justify-end gap-1 md:gap-3">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "p-2 transition-colors",
                  onHero ? "text-ivory" : "text-espresso"
                )}
              >
                <Search className="w-5 h-5" strokeWidth={1.25} />
              </button>
              <button
                type="button"
                aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
                onClick={openCart}
                className={cn(
                  "relative p-2 transition-colors",
                  onHero ? "text-ivory" : "text-espresso"
                )}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.25} />
                {itemCount > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full",
                      "text-[10px] leading-[18px] text-center font-medium",
                      onHero
                        ? "bg-ivory text-espresso"
                        : "bg-espresso text-ivory"
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

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-500 ease-editorial",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso-deep/60"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute top-0 left-0 h-full w-[82%] max-w-sm bg-ivory p-6",
            "transform transition-transform duration-500 ease-editorial",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-2xl tracking-[0.3em] font-light text-espresso">
              VELMORA
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2 text-espresso"
            >
              <X className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "block py-3 font-serif text-2xl text-espresso",
                    "border-b border-hairline",
                    isActive && "italic"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-10 space-y-2">
            <p className="eyebrow">Customer Care</p>
            <a
              href="mailto:hello@velmora.com"
              className="block text-sm text-muted"
            >
              hello@velmora.com
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
