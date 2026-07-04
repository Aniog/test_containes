import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const { totals, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Home page has a transparent navbar over the hero; other pages are always solid.
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  const solid = !isHome || scrolled;
  const onDarkHero = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          solid
            ? "bg-bg/95 backdrop-blur-sm border-b border-hairline"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-[22px] md:text-[26px] tracking-[0.32em] leading-none",
              onDarkHero ? "text-bg" : "text-ink"
            )}
            aria-label="Velmora — home"
          >
            VELMORA
          </Link>

          {/* Center links (desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "label-cap transition-colors duration-300",
                    onDarkHero
                      ? isActive
                        ? "text-bg"
                        : "text-bg/80 hover:text-bg"
                      : isActive
                        ? "text-ink"
                        : "text-muted hover:text-ink"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen((s) => !s)}
              className={cn(
                "p-2 transition-colors",
                onDarkHero
                  ? "text-bg/85 hover:text-bg"
                  : "text-ink/80 hover:text-ink"
              )}
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <Link
              to="/account"
              className={cn(
                "hidden md:inline-flex p-2 transition-colors",
                onDarkHero
                  ? "text-bg/85 hover:text-bg"
                  : "text-ink/80 hover:text-ink"
              )}
              aria-label="Account"
            >
              <User className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </Link>
            <button
              type="button"
              onClick={openCart}
              className={cn(
                "relative p-2 transition-colors",
                onDarkHero
                  ? "text-bg/85 hover:text-bg"
                  : "text-ink/80 hover:text-ink"
              )}
              aria-label={`Cart, ${totals.count} items`}
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              {totals.count > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 inline-flex items-center justify-center rounded-full text-[9px] font-medium",
                    onDarkHero
                      ? "bg-bg text-ink"
                      : "bg-ink text-bg"
                  )}
                >
                  {totals.count}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((s) => !s)}
              className={cn(
                "md:hidden p-2 transition-colors",
                onDarkHero
                  ? "text-bg/85 hover:text-bg"
                  : "text-ink/80 hover:text-ink"
              )}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-[20px] h-[20px]" strokeWidth={1.5} />
              ) : (
                <Menu className="w-[20px] h-[20px]" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div className="border-t border-hairline bg-bg">
            <div className="container-x py-4 flex items-center gap-3">
              <Search className="w-[18px] h-[18px] text-muted" strokeWidth={1.5} />
              <input
                type="search"
                placeholder="Search jewelry, collections…"
                className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-muted"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="label-cap text-muted hover:text-ink"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-bg animate-fade-up">
          <div className="container-x pt-24 pb-12 flex flex-col gap-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-3xl",
                    isActive ? "text-ink" : "text-ink/80"
                  )
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="h-px bg-hairline my-4" />
            <Link
              to="/account"
              className="label-cap text-muted"
              onClick={() => setMobileOpen(false)}
            >
              Account
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openCart();
              }}
              className="label-cap text-muted text-left"
            >
              Cart · {totals.count}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
