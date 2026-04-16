import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Heart, User, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { categories } from '../data/products';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-700 text-white text-center py-1.5 text-sm">
        🎉 新用户首单享8折优惠 | 满299元包邮 | 隐私包装发货
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            ♥
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
            蜜语商城
          </span>
        </Link>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="搜索商品..."
              className="w-full pl-4 pr-12 py-2.5 border-2 border-pink-200 rounded-full focus:outline-none focus:border-pink-500 text-gray-700 text-sm"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full p-2 hover:opacity-90 transition"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="hidden md:flex items-center gap-1 text-gray-600 hover:text-pink-600 transition text-sm">
            <User className="w-5 h-5" />
            <span>我的</span>
          </button>
          <button className="hidden md:flex items-center gap-1 text-gray-600 hover:text-pink-600 transition text-sm">
            <Heart className="w-5 h-5" />
            <span>收藏</span>
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:block">购物车</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Category nav */}
      <nav className="hidden md:block border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 overflow-x-auto">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={cat.id === 'all' ? '/products' : `/products?category=${cat.id}`}
              className="flex items-center gap-1.5 px-4 py-2.5 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-md transition whitespace-nowrap"
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3">
          <div className="grid grid-cols-4 gap-2">
            {categories.slice(1).map(cat => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-pink-50 transition"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs text-gray-600">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
