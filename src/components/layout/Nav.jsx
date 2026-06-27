import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import Container from "./Container";

export default function Nav() {
  const scrolled = useScrollPosition(80);
  const { itemCount, openDrawer } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out",
          scrolled
            ? "bg-bone/95 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: Logo */}
            <Link
              to="/"
              aria-label="Velmora home"
              className={cn(
                "font-serif text-xl md:text-2xl tracking-[0.3em] uppercase font-medium",
                scrolled ? "text-espresso" : "text-espresso"
              )}
            >
              Velmora
            </Link>

            {/* Center: nav links (desktop) */}
            <nav
              aria-label="Primary"
              className="hidden md:flex items-center gap-10"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "text-label link-underline transition-colors",
                      isActive
                        ? "text-espresso"
                        : "text-espresso-soft hover:text-espresso"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button
                type="button"
                aria-label="Search"
                className="p-2 text-espresso hover:text-espresso-soft transition-colors"
              >
                <Search strokeWidth={1.25} className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label={`Cart, ${itemCount} items`}
                onClick={openDrawer}
                className="relative p-2 text-espresso hover:text-espresso-soft transition-colors"
              >
                <ShoppingBag strokeWidth={1.25} className="w-5 h-5" />
                {itemCount > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-champagne text-espresso text-[10px] font-semibold flex items-center justify-center"
                  >
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                aria-label="Menu"
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 text-espresso"
              >
                <Menu strokeWidth={1.25} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[78%] max-w-[360px] bg-bone shadow-2xl transition-transform duration-500 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-line">
            <span className="font-serif text-lg tracking-[0.3em] uppercase">Velmora</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-espresso"
            >
              <X strokeWidth={1.25} className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col px-5 py-8 gap-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-2xl tracking-wide",
                    isActive ? "text-espresso" : "text-espresso-soft"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-5 mt-4">
            <div className="hairline-gold w-12 mb-6" />
            <p className="text-label text-muted">Customer Care</p>
            <p className="font-serif text-base text-espresso mt-2">
              care@velmora.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}