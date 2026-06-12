import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
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
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-bone/95 backdrop-blur border-b border-mist"
          : "bg-bone border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span
            aria-hidden
            className="inline-block w-2 h-8 bg-gold group-hover:bg-gold-deep transition-colors"
          />
          <span className="font-serif text-xl md:text-2xl tracking-tight text-ink leading-none">
            ARTITECT
            <span className="text-steel font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] ml-2 align-middle">
              Machinery
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide uppercase font-medium transition-colors",
                  isActive
                    ? "text-ink"
                    : "text-steel hover:text-ink"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center bg-ink text-bone px-5 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-graphite transition-colors"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-ink p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-mist bg-bone">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-sm tracking-wide uppercase font-medium",
                    isActive ? "text-ink" : "text-steel"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-ink text-bone px-5 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-graphite transition-colors mt-2"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
