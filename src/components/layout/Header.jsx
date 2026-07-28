import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe, Mail } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Header() {
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
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur transition-shadow",
        scrolled && "shadow-soft"
      )}
    >
      {/* Top utility bar */}
      <div className="hidden md:block border-b border-border bg-surface-subtle">
        <div className="container-x flex items-center justify-between text-xs text-ink-muted py-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> English
            </span>
            <span className="text-border">|</span>
            <span>{COMPANY.hours}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${COMPANY.email}`} className="hover:text-primary flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> {COMPANY.email}
            </a>
            <span className="text-border">|</span>
            <span>WhatsApp: {COMPANY.whatsapp}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-md bg-primary text-white flex items-center justify-center font-bold text-lg shadow-soft">
            SS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base md:text-lg font-bold text-ink">SSourcing China</span>
            <span className="text-[10px] md:text-xs text-ink-muted uppercase tracking-wider">
              Sourcing · QC · Shipping
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-primary bg-primary-light"
                    : "text-ink-soft hover:text-primary hover:bg-surface-muted"
                )
              }
              end={l.path === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="btn-secondary btn-sm">
            Talk to Us
          </Link>
          <Link to="/contact" className="btn-accent btn-sm">
            Get a Free Quote
          </Link>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-ink hover:bg-surface-muted"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-x py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2.5 text-sm font-medium rounded-md",
                    isActive
                      ? "text-primary bg-primary-light"
                      : "text-ink-soft hover:bg-surface-muted"
                  )
                }
                end={l.path === "/"}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-border mt-2">
              <Link to="/contact" className="btn-secondary">
                Talk to Us
              </Link>
              <Link to="/contact" className="btn-accent">
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
