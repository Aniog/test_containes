import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur border-ink-200"
          : "bg-white border-transparent"
      )}
    >
      <div className="hidden md:block bg-brand-800 text-brand-50 text-xs">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-end gap-6 h-9">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" />
            {SITE.email}
          </a>
          <a
            href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
          <span className="text-brand-200">{SITE.hours}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label={SITE.name}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-600 text-white font-bold">
              SS
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[15px] font-bold text-ink-900">SSourcing China</span>
              <span className="text-[11px] text-ink-500">Sourcing · QC · Shipping</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-[15px] font-medium rounded-md transition-colors",
                    isActive
                      ? "text-brand-700 bg-brand-50"
                      : "text-ink-700 hover:text-brand-700 hover:bg-ink-50"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-md bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Get a Free Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 text-ink-700"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-3">
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "py-3 text-base font-medium border-b border-ink-100 last:border-0",
                      isActive ? "text-brand-700" : "text-ink-800"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/contact"
              className="mt-3 mb-1 inline-flex h-11 w-full items-center justify-center rounded-md bg-brand-600 text-sm font-semibold text-white"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
