import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const centerLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?collection=Earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  // The hero is the only "transparent over content" surface. On the
  // homepage the nav starts transparent and turns cream as you scroll past
  // ~80px. On every other page it is solid from the start.
  const isHome = location.pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) return undefined;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close the mobile drawer when the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    if (mobileOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    return undefined;
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out",
          solid
            ? "bg-cream-100/95 backdrop-blur-md border-b border-hairline"
            : "bg-transparent border-b border-transparent",
        )}
        data-testid="site-nav"
      >
        <nav
          className={cn(
            "mx-auto flex h-16 items-center justify-between px-5 md:h-20 md:px-10 lg:px-14",
            "max-w-editorial",
          )}
        >
          {/* Left: logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-xl tracking-[0.32em] md:text-2xl",
              "transition-colors duration-300",
              solid ? "text-ink-300" : "text-cream-100",
            )}
            aria-label="Velmora — home"
          >
            VELMORA
          </Link>

          {/* Center: navigation links (desktop) */}
          <ul className="hidden md:flex items-center gap-9">
            {centerLinks.map((link) => (
              <li key={link.to + link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "eyebrow relative py-1 transition-colors duration-300",
                      solid
                        ? "text-ink-300 hover:text-gold-300"
                        : "text-cream-100/90 hover:text-cream-100",
                      isActive && (solid ? "text-gold-300" : "text-cream-100"),
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: search + cart + mobile menu */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "p-1 transition-colors duration-300",
                solid
                  ? "text-ink-300 hover:text-gold-300"
                  : "text-cream-100/90 hover:text-cream-100",
              )}
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label={`Open cart, ${itemCount} items`}
              onClick={openCart}
              className={cn(
                "relative p-1 transition-colors duration-300",
                solid
                  ? "text-ink-300 hover:text-gold-300"
                  : "text-cream-100/90 hover:text-cream-100",
              )}
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.4} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-medium leading-none",
                    solid
                      ? "bg-ink-300 text-cream-100"
                      : "bg-cream-100 text-ink-300",
                  )}
                >
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "p-1 md:hidden transition-colors duration-300",
                solid
                  ? "text-ink-300 hover:text-gold-300"
                  : "text-cream-100/90 hover:text-cream-100",
              )}
            >
              <Menu className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 h-full w-full bg-ink-400/40"
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[78%] max-w-sm bg-cream-100 px-7 py-7 shadow-soft",
            "transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-label="Site menu"
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg tracking-[0.32em] text-ink-300">
              VELMORA
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-1 text-ink-300"
            >
              <X className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
          <div className="hairline mt-7" />
          <ul className="mt-7 space-y-5">
            {centerLinks.map((link) => (
              <li key={link.to + link.label}>
                <NavLink
                  to={link.to}
                  className="font-serif text-3xl text-ink-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hairline mt-7" />
          <p className="mt-7 eyebrow">Customer Care</p>
          <p className="mt-3 text-sm text-ink-100">
            care@velmora.com
            <br />
            Mon–Fri, 9–5 GMT
          </p>
        </div>
      </div>
    </>
  );
}
