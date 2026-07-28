import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white border-b transition-shadow",
        scrolled ? "border-brand-border shadow-sm" : "border-transparent"
      )}
    >
      {/* Top utility bar */}
      <div className="hidden md:block bg-brand-navy text-white">
        <div className="max-w-container mx-auto container-px flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-5 text-white/85">
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Mail className="w-3.5 h-3.5" />
              {COMPANY.email}
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5" />
              {COMPANY.phone}
            </a>
          </div>
          <div className="text-white/70">
            Based in {COMPANY.hqCity} · Operating since {COMPANY.founded}
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto container-px">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2.5" aria-label="SSourcing China home">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-brand-navy text-white font-bold tracking-tight">
              SS
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-base md:text-lg font-bold text-brand-ink">
                SSourcing China
              </span>
              <span className="text-[10px] md:text-xs text-brand-slate mt-0.5 tracking-wide">
                Sourcing · QC · Shipping
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand-navy bg-brand-surface"
                      : "text-brand-ink hover:text-brand-navy hover:bg-brand-surface"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-brand-ink hover:bg-brand-surface"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-brand-border bg-white">
          <div className="max-w-container mx-auto container-px py-3 flex flex-col">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-3 px-2 text-sm font-medium border-b border-brand-border/60 last:border-b-0",
                    isActive ? "text-brand-navy" : "text-brand-ink"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 pb-2 flex flex-col gap-3">
              <Link to="/contact" className="btn-primary w-full">
                Get a Free Quote
              </Link>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-sm text-brand-slate text-center"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
