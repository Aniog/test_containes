import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { summary, openDrawer } = useCart();
  const location = useLocation();

  // Track scroll to switch navbar tone.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Lock body scroll when mobile menu open
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

  // Tone decisions:
  // - At top of page (scrolled=false), transparent w/ ivory text (sits over hero)
  // - When scrolled OR not on home, solid ivory w/ ink text
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;
  const tone = transparent ? "ivory" : "ink";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out",
          transparent
            ? "bg-transparent"
            : "bg-ivory/95 backdrop-blur-md border-b border-ink/10"
        )}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid h-16 md:h-20 grid-cols-[1fr_auto_1fr] items-center">
            {/* Left: mobile menu + desktop logo */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "md:hidden -ml-2 p-2 transition-colors",
                  tone === "ivory" ? "text-ivory" : "text-ink"
                )}
                aria-label="Open menu"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
              <Link
                to="/"
                aria-label="Velmora home"
                className="hidden md:inline-flex"
              >
                <Logo tone={tone} size="md" />
              </Link>
            </div>

            {/* Center: links (desktop) + logo (mobile) */}
            <div className="flex items-center justify-center">
              <Link to="/" aria-label="Velmora home" className="md:hidden">
                <Logo tone={tone} size="md" />
              </Link>
              <nav className="hidden md:flex items-center gap-10">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "font-sans text-[11px] uppercase tracking-button transition-colors duration-300",
                        tone === "ivory"
                          ? "text-ivory/90 hover:text-ivory"
                          : "text-ink/80 hover:text-ink",
                        isActive && (tone === "ivory" ? "text-ivory" : "text-ink")
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Right: search + cart */}
            <div className="flex items-center justify-end gap-2 md:gap-4">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "p-2 transition-colors",
                  tone === "ivory" ? "text-ivory hover:text-ivory/80" : "text-ink hover:text-ink/70"
                )}
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label={`Cart with ${summary.itemCount} items`}
                onClick={openDrawer}
                className={cn(
                  "relative p-2 transition-colors",
                  tone === "ivory" ? "text-ivory hover:text-ivory/80" : "text-ink hover:text-ink/70"
                )}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {summary.itemCount > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full text-[10px] font-sans font-medium flex items-center justify-center px-1",
                      tone === "ivory"
                        ? "bg-ivory text-ink"
                        : "bg-ink text-ivory"
                    )}
                  >
                    {summary.itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-ivory shadow-soft flex flex-col transition-transform duration-500 ease-out",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-ink/10">
            <Logo tone="ink" size="md" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2 text-ink"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "block font-serif text-3xl py-3 transition-colors",
                    isActive ? "text-gold" : "text-ink hover:text-gold"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto p-6 border-t border-ink/10 text-taupe text-xs uppercase tracking-eyebrow">
            Free worldwide shipping over $80
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
