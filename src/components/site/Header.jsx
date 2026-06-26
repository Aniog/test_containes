import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Container } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-700 text-white">
              <Container className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base md:text-lg font-bold text-navy-700 tracking-tight">
                {SITE.name}
              </span>
              <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                China Sourcing Agent
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-navy-700"
                      : "text-slate-700 hover:text-navy-700",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 transition shadow-sm"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2.5 rounded-md text-sm font-medium",
                    isActive
                      ? "text-navy-700 bg-navy-50"
                      : "text-slate-700 hover:bg-slate-50",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-3 transition"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
