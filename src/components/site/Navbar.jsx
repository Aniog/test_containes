import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe2 } from "lucide-react";
import { nav } from "@/data/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors ${
        scrolled
          ? "border-surface-100 bg-white/95 backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="SSourcing China">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink-900 text-white">
            <span className="text-[15px] font-bold leading-none">S</span>
          </span>
          <span className="flex items-baseline gap-1.5">
            <span className="text-[17px] font-bold tracking-tight text-ink-900">
              SSourcing
            </span>
            <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-accent-600">
              China
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[14.5px] font-medium transition-colors ${
                  isActive
                    ? "text-ink-900"
                    : "text-ink-600 hover:text-ink-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="inline-flex items-center gap-1.5 text-[13px] text-ink-500">
            <Globe2 className="h-4 w-4" />
            EN
          </span>
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get a Free Sourcing Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-surface-200 text-ink-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-surface-100 bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-[15px] font-medium ${
                    isActive
                      ? "bg-surface-50 text-ink-900"
                      : "text-ink-600 hover:bg-surface-50 hover:text-ink-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary mt-3 w-full">
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
