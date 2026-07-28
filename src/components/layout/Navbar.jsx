import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Ship } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-steel-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-xl text-brand-700">
            <Ship className="h-7 w-7 text-brand-600" />
            <span>SSourcing<span className="text-brand-500">China</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-steel-600 hover:text-brand-700 hover:bg-steel-50'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden rounded-md p-2 text-steel-600 hover:bg-steel-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-steel-200 bg-white">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block rounded-md px-3 py-2.5 text-base font-medium transition-colors',
                    isActive
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-steel-600 hover:text-brand-700 hover:bg-steel-50'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center rounded-md bg-brand-600 px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors mt-3"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
