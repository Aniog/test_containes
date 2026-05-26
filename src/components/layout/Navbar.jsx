import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Trophy } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center">
              <Trophy className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="hidden sm:block">
              <span className="text-red-700 font-extrabold text-lg leading-none">世界杯</span>
              <span className="text-slate-900 font-extrabold text-lg leading-none ml-1">周边</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-700 hover:text-red-700 font-medium transition-colors text-sm">首页</Link>
            <Link to="/products" className="text-slate-700 hover:text-red-700 font-medium transition-colors text-sm">全部商品</Link>
            <Link to="/products?category=jersey" className="text-slate-700 hover:text-red-700 font-medium transition-colors text-sm">球衣</Link>
            <Link to="/products?category=collectible" className="text-slate-700 hover:text-red-700 font-medium transition-colors text-sm">收藏品</Link>
          </div>

          {/* Search + Cart */}
          <div className="flex items-center gap-3">
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索商品..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-48 text-slate-800 placeholder-gray-400"
                />
              </div>
            </form>

            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-slate-700 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="购物车"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-700 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 text-slate-700 hover:bg-gray-100 rounded-lg"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="菜单"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索商品..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 placeholder-gray-400"
                />
              </div>
              <button type="submit" className="bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium">搜索</button>
            </form>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "首页" },
                { to: "/products", label: "全部商品" },
                { to: "/products?category=jersey", label: "球衣" },
                { to: "/products?category=collectible", label: "收藏品" },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-700 hover:text-red-700 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
