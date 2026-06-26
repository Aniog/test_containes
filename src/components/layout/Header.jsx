import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
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
        "sticky top-0 z-40 w-full border-b transition-colors duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur border-line"
          : "bg-white border-transparent"
      )}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-2 group" aria-label="SSourcing China home">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-ink-900 text-white font-bold text-sm">
            SS
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-bold text-ink-900 text-[15px] tracking-tight">
              SSourcing China
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink-600 mt-1">
              China Sourcing Agent
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive ? "text-ink-900" : "text-ink-700 hover:text-ink-900"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-600">
            <Globe className="w-3.5 h-3.5" /> EN · 中文
          </span>
          <Button as={Link} to="/contact#quote" size="sm">
            Get a Free Sourcing Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-ink-900 hover:bg-paper-muted"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <nav className="container-x py-3 flex flex-col">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-sm font-medium border-b border-line last:border-b-0",
                    isActive ? "text-ink-900" : "text-ink-700"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 pb-2">
              <Button as={Link} to="/contact#quote" size="md" className="w-full">
                Get a Free Sourcing Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;