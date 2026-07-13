import { useState, useEffect } from 'react';
import { Gamepad2, Menu, X, Zap, ShoppingCart, BookOpen, Tag } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'News', href: '#news' },
  { label: 'Deals', href: '#deals' },
  { label: 'Store', href: '#store' },
];

export default function Navbar({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'} border-b border-gray-800/50`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              Game<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Hub</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-400 hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-gray-800/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#deals" className="flex items-center gap-1.5 text-sm text-orange-400 font-semibold hover:text-orange-300 transition-colors">
              <Zap className="w-4 h-4" />
              Hot Deals
            </a>
            <a
              href="#store"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              Store
              {cartCount > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-950/98 border-t border-gray-800 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#store"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 mt-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold px-4 py-3 rounded-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            Visit Store
          </a>
        </div>
      )}
    </nav>
  );
}
