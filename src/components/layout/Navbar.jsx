import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "../../data/site.js";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
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
      className={`sticky top-0 z-40 bg-white border-b transition-colors ${
        scrolled ? "border-hairline" : "border-transparent"
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-md bg-navy text-white flex items-center justify-center font-bold tracking-tight">
              SS
            </div>
            <div className="leading-tight">
              <div className="text-navy font-bold text-lg">SSourcing China</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted">
                Your sourcing agent in China
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition ${
                    isActive
                      ? "text-navy"
                      : "text-ink/80 hover:text-navy"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-ink/80 hover:text-navy"
            >
              {siteConfig.email}
            </a>
            <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden p-2 rounded-md text-navy hover:bg-steel"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-white">
          <nav className="container-content py-3 flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-3 text-sm font-medium rounded-md ${
                    isActive ? "text-navy bg-steel" : "text-ink/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-3 w-full">
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
