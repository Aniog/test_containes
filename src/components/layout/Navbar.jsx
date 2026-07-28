import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-ink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-md bg-brand-800 text-white flex items-center justify-center font-bold">
              SS
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-ink-900 tracking-tight">
                SSourcing China
              </span>
              <span className="text-[11px] text-ink-500 hidden sm:block">
                Sourcing Agent for Global Buyers
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition",
                    isActive
                      ? "text-brand-800 bg-brand-50"
                      : "text-ink-700 hover:text-brand-800 hover:bg-ink-100"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
              <Globe2 className="w-3.5 h-3.5" />
              EN · 中文
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent-600 hover:bg-accent-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition shadow-sm"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-ink-700 hover:bg-ink-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "block px-3 py-2 rounded-md text-sm font-medium",
                    isActive
                      ? "text-brand-800 bg-brand-50"
                      : "text-ink-700 hover:bg-ink-100"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 block text-center bg-accent-600 hover:bg-accent-700 text-white text-sm font-semibold px-4 py-2.5 rounded-md"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
