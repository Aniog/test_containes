import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?cat=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  // Solid on scroll, OR whenever we're not on the homepage.
  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome;

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

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-editorial",
          solid
            ? "border-b border-cream/80 bg-ivory/95 backdrop-blur"
            : "border-b border-transparent bg-transparent"
        )}
        data-solid={solid ? "true" : "false"}
      >
        <nav
          className={cn(
            "mx-auto flex h-16 max-w-container items-center justify-between px-5 transition-colors duration-500 md:h-20 md:px-10 lg:px-16",
            solid ? "text-espresso" : "text-ivory"
          )}
        >
          <Link
            to="/"
            className="font-serif text-2xl font-medium tracking-[0.32em] md:text-[26px]"
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "text-[12px] font-medium uppercase tracking-widest2 transition-colors duration-300",
                      "hover:opacity-70",
                      solid
                        ? isActive
                          ? "text-gold-deep"
                          : "text-espresso"
                        : isActive
                          ? "text-gold-soft"
                          : "text-ivory/90"
                    )
                  }
                  end={link.to === "/"}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "rounded-full p-2 transition-colors duration-300 hover:bg-espresso/5",
                solid ? "text-espresso" : "text-ivory"
              )}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className={cn(
                "relative rounded-full p-2 transition-colors duration-300 hover:bg-espresso/5",
                solid ? "text-espresso" : "text-ivory"
              )}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {itemCount > 0 ? (
                <span
                  className={cn(
                    "absolute -right-0.5 -top-0.5 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-medium tabular leading-none",
                    solid
                      ? "bg-espresso text-ivory"
                      : "bg-ivory text-espresso"
                  )}
                >
                  {itemCount}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "rounded-full p-2 transition-colors duration-300 hover:bg-espresso/5 md:hidden",
                solid ? "text-espresso" : "text-ivory"
              )}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-30 origin-top transform border-b border-cream bg-ivory shadow-soft transition-all duration-500 ease-editorial md:hidden",
          mobileOpen
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "block py-3 font-serif text-2xl text-espresso",
                    isActive && "italic text-gold-deep"
                  )
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
