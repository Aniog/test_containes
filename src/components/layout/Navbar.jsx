import { useState, useEffect } from "react";
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
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-stone-50/90 backdrop-blur border-b border-slate-200"
          : "bg-stone-50 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-stone-50 font-serif text-lg leading-none">
              A
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-lg text-slate-900 tracking-wide">
                ARTITECT
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-slate-500">
                Machinery
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    isActive
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-stone-50 hover:bg-slate-800 transition-colors"
            >
              Request a quote
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-1 pt-2 border-t border-slate-200">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-3 text-base rounded-lg",
                      isActive
                        ? "bg-slate-100 text-slate-900 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-3 inline-flex justify-center items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-stone-50"
              >
                Request a quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
