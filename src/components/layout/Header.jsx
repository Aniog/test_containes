import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";

const NAV_ITEMS = [
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-line bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-ink text-sm font-bold text-white">
            SS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold text-brand-ink">SSourcing China</span>
            <span className="text-[11px] font-medium text-brand-muted">China Sourcing Agent</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-primary"
                    : "text-brand-text hover:text-brand-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-muted">
            <Globe className="h-3.5 w-3.5" /> EN · CN
          </span>
          <Link to="/contact" className="btn-primary !py-2 !px-4 text-sm">
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-line text-brand-ink"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-line bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-sm font-medium rounded-md ${
                    isActive
                      ? "bg-brand-surface text-brand-primary"
                      : "text-brand-text hover:bg-brand-surface"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-3 w-full text-sm">
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
