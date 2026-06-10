import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Machines" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

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
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur border-b border-mist"
          : "bg-paper border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-serif text-2xl text-ink tracking-tight">
            Artitect
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-accent mt-1">
            Machinery
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive
                    ? "text-ink"
                    : "text-steel hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-ink text-paper px-6 py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-graphite transition"
          >
            Request Quote
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-mist bg-paper">
          <nav className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `py-3 text-base tracking-wide border-b border-mist last:border-b-0 ${
                    isActive ? "text-ink" : "text-steel"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-block text-center bg-ink text-paper px-6 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
