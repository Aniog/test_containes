import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections", match: "/shop" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

function Logo({ light = false }) {
  return (
    <Link
      to="/"
      aria-label="Velmora home"
      className={cn(
        "font-serif text-2xl md:text-[26px] tracking-[0.32em] font-medium leading-none transition-colors duration-500",
        light ? "text-cream-50" : "text-espresso-300",
      )}
    >
      VELMORA
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, open } = useCart();
  const location = useLocation();

  // Hero-style transparent only on the home page; other pages always solid.
  const allowTransparent = location.pathname === "/";

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

  const solid = !allowTransparent || scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth",
        solid
          ? "bg-cream-50/95 backdrop-blur-md border-b border-hairline/60"
          : "bg-transparent",
      )}
    >
      <div className="container-wide flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "p-2 -ml-2 transition-colors",
              solid ? "text-espresso-300" : "text-cream-50",
            )}
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="hidden md:block md:w-1/3">
          <Logo light={!solid} />
        </div>
        <div className="md:hidden">
          <Logo light={!solid} />
        </div>

        <nav className="hidden md:flex md:w-1/3 justify-center">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "font-sans text-[12px] uppercase tracking-widest2 transition-colors duration-500",
                      solid
                        ? isActive
                          ? "text-gold-500"
                          : "text-espresso-300 hover:text-gold-500"
                        : isActive
                          ? "text-gold-300"
                          : "text-cream-50 hover:text-gold-300",
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-1 md:gap-2 md:w-1/3">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "p-2 transition-colors",
              solid ? "text-espresso-300 hover:text-gold-500" : "text-cream-50 hover:text-gold-300",
            )}
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            onClick={open}
            className={cn(
              "relative p-2 transition-colors",
              solid ? "text-espresso-300 hover:text-gold-500" : "text-cream-50 hover:text-gold-300",
            )}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {itemCount > 0 && (
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full text-[10px] font-sans font-medium flex items-center justify-center px-1",
                  solid
                    ? "bg-espresso-300 text-cream-50"
                    : "bg-cream-50 text-espresso-300",
                )}
              >
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso-300/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[82%] max-w-sm bg-cream-50 shadow-drawer transition-transform duration-500 ease-smooth flex flex-col",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-hairline/60">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2 text-espresso-300"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="px-6 py-8 flex-1">
            <ul className="space-y-5">
              {links.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "block font-serif text-3xl tracking-tight",
                        isActive ? "text-gold-500" : "text-espresso-300",
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-6 py-6 border-t border-hairline/60 text-[12px] uppercase tracking-widest2 text-muted">
            Free worldwide shipping over $75
          </div>
        </div>
      </div>
    </header>
  );
}

export { Logo };
