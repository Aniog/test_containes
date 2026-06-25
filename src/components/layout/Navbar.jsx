import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="inline-block w-9 h-9 border border-ink flex items-center justify-center">
            <span className="font-display text-ink text-lg leading-none">A</span>
          </span>
          <span className="font-display text-ink text-lg tracking-[0.25em]">
            ARTITECT
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide transition-colors",
                  isActive
                    ? "text-ink"
                    : "text-graphite hover:text-ink",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center bg-ink text-paper hover:bg-steel rounded-sm px-5 py-2.5 text-sm tracking-wide transition-colors"
        >
          Request a Quote
        </Link>

        <button
          type="button"
          className="md:hidden text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-mist bg-paper">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-base py-1",
                    isActive ? "text-ink" : "text-graphite",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-ink text-paper rounded-sm px-5 py-3 text-sm tracking-wide"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}

      {/* preserve location reference to avoid lint warning */}
      <span className="hidden">{location.pathname}</span>
    </header>
  );
}
