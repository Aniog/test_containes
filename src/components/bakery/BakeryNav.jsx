import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Articles', to: '/articles' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const BakeryNav = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors ${isActive ? 'text-amber' : 'text-brown hover:text-amber'}`;

  return (
    <nav className="sticky top-0 z-50 bg-warm-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-playfair font-bold text-brown-dark">La Maison</span>
          <span className="text-amber text-2xl">✦</span>
          <span className="text-lg font-playfair text-brown-light italic">Bakery</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-block bg-amber text-warm-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-amber-light transition-colors"
        >
          Order Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brown-dark p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-warm-white border-t border-amber/20 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-4 inline-block bg-amber text-warm-white rounded-full px-6 py-2 text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default BakeryNav;
