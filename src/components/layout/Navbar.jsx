import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X, Package } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const categories = [
    { label: '电子产品', value: 'electronics' },
    { label: '时尚服饰', value: 'fashion' },
    { label: '食品', value: 'food' },
    { label: '美妆', value: 'beauty' },
    { label: '家居', value: 'home' },
    { label: '运动', value: 'sports' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-red-600 text-white text-xs py-1.5 text-center">
        全场包邮 · 正品保障 · 7天无理由退换
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-red-600 font-bold text-xl hidden sm:block">华购商城</span>
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索商品..."
                className="w-full pl-4 pr-12 py-2.5 border-2 border-gray-200 rounded-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Cart */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-1.5 text-gray-700 hover:text-red-600 transition-colors p-2"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="hidden sm:block text-sm font-medium">购物车</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Category nav - desktop */}
        <nav className="hidden md:flex items-center gap-1 pb-2 overflow-x-auto">
          <Link
            to="/products"
            className="text-sm text-gray-600 hover:text-red-600 px-3 py-1.5 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap"
          >
            全部商品
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.value}
              to={`/products?category=${cat.value}`}
              className="text-sm text-gray-600 hover:text-red-600 px-3 py-1.5 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap"
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3">
          <div className="flex flex-wrap gap-2">
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full"
            >
              全部商品
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.value}
                to={`/products?category=${cat.value}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
