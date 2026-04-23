import { useState } from 'react';
import { ShoppingBag, Search, Heart, Menu, X, Sparkles } from 'lucide-react';

const Navbar = ({ cartCount, onCartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Pulseras', href: '#pulseras' },
    { label: 'Collares', href: '#collares' },
    { label: 'Pendientes', href: '#pendientes' },
    { label: 'Anillos', href: '#anillos' },
    { label: 'Bolsos', href: '#bolsos' },
    { label: 'Novedades', href: '#novedades' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-100 shadow-sm">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 text-white text-center py-2 text-xs font-medium tracking-wider">
        ✨ ENVÍO GRATIS en pedidos mayores de $50 · Hecho a mano con amor ✨
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-display text-xl font-bold text-gray-800 tracking-tight">
                Luna<span className="text-rose-400">Creativa</span>
              </span>
              <p className="text-xs text-gray-400 leading-none tracking-widest uppercase">Accesorios Únicos</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 hover:text-rose-500 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all hidden sm:flex"
              aria-label="Favoritos"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              onClick={onCartOpen}
              className="relative p-2 text-gray-600 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
              aria-label="Carrito"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
              aria-label="Menú"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-3 animate-fade-in-up">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar pulseras, collares, pendientes..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 text-gray-700"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-rose-100 px-4 py-4 animate-fade-in-up">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded-lg font-medium transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
