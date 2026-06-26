import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import BrandMark from "./BrandMark";
import Container from "./Container";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper-50/85 backdrop-blur-md border-b border-ink-900/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link to="/" aria-label="ARTITECT MACHINERY home">
          <BrandMark tone="dark" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-copper-600"
                    : "text-ink-800 hover:text-copper-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] bg-copper-500 transition-all ${
                      isActive ? "w-6 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-ink-800 hover:text-copper-600 transition-colors"
          >
            <Phone className="w-4 h-4 text-copper-600" />
            {site.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-950 text-paper-50 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-copper-600 transition-colors shadow-sm"
          >
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-ink-900/10 text-ink-900"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        } bg-paper-50 border-t border-ink-900/10`}
      >
        <Container className="py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium ${
                  isActive
                    ? "bg-copper-100 text-copper-700"
                    : "text-ink-800 hover:bg-mist-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="mt-3 px-4 py-3 rounded-xl text-base font-medium text-ink-800 hover:bg-mist-100 flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-copper-600" />
            {site.phone}
          </a>
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-navy-950 text-paper-50 px-5 py-3 rounded-full text-sm font-semibold hover:bg-copper-600 transition-colors"
          >
            Request a quote
          </Link>
        </Container>
      </div>
    </header>
  );
}