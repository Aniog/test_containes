import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export function Navbar() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-editorial",
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-hairline"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-content flex h-16 items-center justify-between md:h-20">
          {/* Left: hamburger on mobile, logo on desktop */}
          <div className="flex items-center gap-4 md:flex-1">
            <button
              type="button"
              className="grid h-9 w-9 place-items-center text-ink md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <Link
              to="/"
              aria-label="Velmora home"
              className="hidden font-serif text-2xl tracking-[0.32em] text-ink md:block"
            >
              VELMORA
            </Link>
          </div>

          {/* Center: logo (mobile) or nav links (desktop) */}
          <div className="flex items-center md:flex-1 md:justify-center">
            <Link
              to="/"
              aria-label="Velmora home"
              className="font-serif text-xl tracking-[0.32em] text-ink md:hidden"
            >
              VELMORA
            </Link>
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "relative text-[0.75rem] font-medium uppercase tracking-[0.22em] transition-colors duration-200",
                      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right: search + cart */}
          <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
            <button
              type="button"
              aria-label="Search"
              className="grid h-9 w-9 place-items-center text-ink transition-colors hover:text-gold-deep"
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
              onClick={openCart}
              className="relative grid h-9 w-9 place-items-center text-ink transition-colors hover:text-gold-deep"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[0.625rem] font-semibold leading-none text-ivory"
                >
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink-deep/40 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-cream transition-transform duration-300 ease-editorial",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-hairline px-5">
            <span className="font-serif text-xl tracking-[0.32em] text-ink">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="grid h-9 w-9 place-items-center text-ink"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "border-b border-hairline py-4 font-serif text-2xl text-ink transition-colors hover:text-gold-deep",
                    isActive && "text-gold-deep"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="border-t border-hairline p-5 text-[0.75rem] uppercase tracking-[0.18em] text-ink-soft">
            Free worldwide shipping on orders $75+
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
