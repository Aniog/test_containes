import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '@/data/siteData.jsx';

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-sm border-b border-steel-200'
          : 'bg-paper border-b border-transparent'
      }`}
    >
      <div className="container-artitect flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-ink-900 text-paper font-display font-extrabold text-lg">
            A
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-ink-900 text-lg tracking-tight">
              ARTITECT
            </span>
            <span className="font-mono text-[10px] tracking-wider2 uppercase text-steel-500 mt-1">
              Machinery
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-ink-900'
                    : 'text-steel-500 hover:text-ink-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-outline">
            Request Quote
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-ink-900"
        >
          {open ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-steel-200 bg-paper">
          <nav className="container-artitect flex flex-col py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `py-3 text-sm font-semibold tracking-wide uppercase border-b border-steel-100 ${
                    isActive ? 'text-ink-900' : 'text-steel-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-6 self-start">
              Request Quote
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
