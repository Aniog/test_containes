import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe2, ChevronDown } from "lucide-react";
import { NAV, COMPANY } from "@/data/content";
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
        "sticky top-0 z-50 w-full transition-colors",
        scrolled
          ? "bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/85 border-b border-white/10"
          : "bg-navy border-b border-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 text-white" aria-label="SSourcing China home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand text-white font-extrabold">
            SS
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-tight">SSourcing China</span>
            <span className="text-[11px] text-white/60 mt-0.5">Sourcing agent for global buyers</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive ? "text-white" : "text-white/75 hover:text-white"
                )
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="hidden xl:inline-flex items-center gap-1.5 text-xs text-white/70">
            <Globe2 className="h-3.5 w-3.5" />
            EN · 中文
          </span>
          <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Get a Free Sourcing Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy">
          <nav className="container-x flex flex-col py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-sm font-medium border-b border-white/5 last:border-b-0",
                    isActive ? "text-white" : "text-white/75"
                  )
                }
                end={item.to === "/"}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  <ChevronDown className="h-4 w-4 -rotate-90 opacity-60" />
                </span>
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-4 w-full">
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
