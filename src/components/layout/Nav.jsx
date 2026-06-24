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

export default function Nav() {
  const { summary, openCart } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Hero is at /, so transparent mode applies only there.
  const transparent = location.pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "bg-bone/95 backdrop-blur-sm border-b border-hairline"
        )}
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "md:hidden p-2 -ml-2",
              transparent ? "text-ivory" : "text-espresso"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-display text-2xl md:text-[28px] tracking-[0.18em] font-medium",
              transparent ? "text-ivory" : "text-espresso"
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Desktop center links */}
          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "nav-link",
                    transparent && "nav-link-light",
                    isActive && "is-active"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "p-2 transition-colors",
                transparent ? "text-ivory hover:text-gold-soft" : "text-espresso hover:text-gold"
              )}
            >
              <Search size={18} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${summary.count} items`}
              className={cn(
                "relative p-2 transition-colors",
                transparent ? "text-ivory hover:text-gold-soft" : "text-espresso hover:text-gold"
              )}
            >
              <ShoppingBag size={18} strokeWidth={1.4} />
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium tracking-widest2 flex items-center justify-center",
                  transparent
                    ? "bg-ivory text-espresso"
                    : "bg-espresso text-ivory"
                )}
              >
                {summary.count}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="absolute top-16 inset-x-0 bg-bone border-b border-hairline shadow-soft">
            <div className="container-x py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "nav-link py-3 text-base border-b border-hairline",
                      isActive && "is-active text-gold"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}