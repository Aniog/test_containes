import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Sparkles, Star } from 'lucide-react';

const navLinks = [
  { to: '/monsters', label: 'Find a Monster', emoji: '🔍' },
  { to: '/quiz', label: 'Take the Quiz', emoji: '✨' },
  { to: '/stories', label: 'Success Stories', emoji: '💝' },
  { to: '/community', label: 'Community', emoji: '🌟' },
  { to: '/education', label: 'Care Guides', emoji: '📚' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
              🐾
            </div>
            <div>
              <div className="font-display text-xl text-purple-700 leading-none">Monster Match</div>
              <div className="text-xs text-pink-500 font-handwritten font-semibold">Magical Adoption Agency</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                <span>{link.emoji}</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/adopt"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-display text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Heart className="w-4 h-4" />
              Adopt Now
            </Link>
            <Link
              to="/account"
              className="flex items-center gap-2 px-4 py-2 border-2 border-purple-300 text-purple-600 rounded-xl font-semibold text-sm hover:bg-purple-50 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-purple-100 shadow-xl animate-slide-up">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                  location.pathname === link.to
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-700 hover:bg-purple-50'
                }`}
              >
                <span className="text-xl">{link.emoji}</span>
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                to="/adopt"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-display shadow-md"
              >
                <Heart className="w-4 h-4" />
                Adopt Now
              </Link>
              <Link
                to="/account"
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-purple-300 text-purple-600 rounded-xl font-semibold"
              >
                <Star className="w-4 h-4" />
                Sign In / Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
