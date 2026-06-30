import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop",           label: "Shop"       },
  { to: "/shop?cat=earrings",  label: "Collections" },
  { to: "/about",          label: "About"      },
  { to: "/journal",        label: "Journal"    },
];

function Logo({ light = false }) {
  return (
    <Link
      to="/"
      className={cn(
        "font-serif text-2xl tracking-[0.28em] font-medium select-none",
        light ? "text-ivory-50" : "text-espresso-900"
      )}
      aria-label="Velmora — Home"
    >
      VELMORA
    </Link>
  );
}

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Solid-on-scroll: any scroll > 24px → solid background.
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
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-elegant",
          solid
            ? "bg-ivory-100/95 backdrop-blur-md border-b border-hairline"
            : "bg-transparent"
        )}
      >
        <div className="container-x flex h-16 md:h-20 items-center justify-between">
          {/* Left — logo */}
          <div className="flex-1 flex justify-start">
            <Logo light={!solid} />
          </div>

          {/* Center — nav links */}
          <nav
            className={cn(
              "hidden md:flex items-center gap-10 text-[12px] uppercase tracking-[0.22em] font-medium",
              solid ? "text-espresso-900" : "text-ivory-50"
            )}
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "relative transition-colors duration-300 hover:text-gold-400",
                    isActive && "text-gold-400"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right — search + cart + mobile trigger */}
          <div className="flex-1 flex justify-end items-center gap-2 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "p-2 rounded-full transition-colors duration-300",
                solid
                  ? "text-espresso-900 hover:text-gold-400"
                  : "text-ivory-50 hover:text-gold-200"
              )}
            >
              <Search size={18} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label={`Cart (${itemCount} items)`}
              onClick={openCart}
              className={cn(
                "relative p-2 rounded-full transition-colors duration-300",
                solid
                  ? "text-espresso-900 hover:text-gold-400"
                  : "text-ivory-50 hover:text-gold-200"
              )}
            >
              <ShoppingBag size={18} strokeWidth={1.4} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center rounded-full text-[10px] font-medium tracking-normal",
                    solid
                      ? "bg-espresso-900 text-ivory-50"
                      : "bg-ivory-50 text-espresso-900"
                  )}
                  aria-hidden="true"
                >
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen((s) => !s)}
              className={cn(
                "md:hidden p-2 rounded-full transition-colors duration-300",
                solid
                  ? "text-espresso-900 hover:text-gold-400"
                  : "text-ivory-50 hover:text-gold-200"
              )}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.4} /> : <Menu size={20} strokeWidth={1.4} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={cn(
          "fixed inset-0 z-30 md:hidden transition-opacity duration-500 ease-elegant",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 bg-ivory-100 pt-24 pb-10 px-6 flex flex-col">
          <nav className="flex flex-col gap-1 mt-4">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-4 border-b border-hairline font-serif text-3xl tracking-tight",
                    isActive ? "text-gold-400" : "text-espresso-900"
                  )
                }
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto pt-8 flex flex-col gap-3 text-[12px] uppercase tracking-[0.22em] text-espresso-500">
            <span>Free worldwide shipping</span>
            <span>30-day returns</span>
            <span>hello@velmora.co</span>
          </div>
        </div>
      </div>
    </>
  );
}

export { Logo };
