import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Globe2 } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-brand-700 text-white">
              <Globe2 className="w-5 h-5" />
            </span>
            <span className="font-bold text-brand-800 tracking-tight text-lg">
              SSourcing<span className="text-accent-500">.</span>China
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-brand-800"
                      : "text-ink-700 hover:text-brand-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-4 py-2 transition"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-brand-800 hover:bg-surface-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-surface-50 text-brand-800"
                      : "text-ink-700 hover:bg-surface-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-4 py-2.5"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
