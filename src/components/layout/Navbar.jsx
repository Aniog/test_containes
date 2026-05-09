import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Phone } from 'lucide-react';

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/products', label: '全部商品' },
  { to: '/about', label: '关于我们' },
  { to: '/contact', label: '联系我们' },
];

export default function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-blue-700 text-white text-sm py-1.5 px-4 text-center">
        <span>🏸 全场满299包邮 | 正品保证 | 7天无理由退换</span>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">羽</span>
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900 leading-tight">羽动天下</div>
              <div className="text-xs text-gray-500 leading-tight">专业羽毛球装备</div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/products"
              className="hidden sm:flex items-center gap-1.5 text-gray-600 hover:text-blue-700 transition-colors"
              aria-label="搜索"
            >
              <Search className="w-5 h-5" />
            </Link>

            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>400-888-8888</span>
            </Link>

            <Link
              to="/cart"
              className="relative flex items-center gap-1.5 bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">购物车</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors border-0 bg-transparent"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="菜单"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors mb-1 ${
                  isActive(link.to)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 px-4 text-sm text-gray-500 flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              <span>400-888-8888</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
