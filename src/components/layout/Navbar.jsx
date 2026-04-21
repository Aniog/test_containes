import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, BookOpen, Menu, X } from 'lucide-react'
import { useCart } from '../../api/CartContext.jsx'

export default function Navbar() {
  const { items } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
      setMobileOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">书海</span>
            <span className="text-xl font-light text-indigo-600">电子书</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">首页</Link>
            <Link to="/shop" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">书库</Link>
            <Link to="/shop?category=技术" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">技术</Link>
            <Link to="/shop?category=商业" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">商业</Link>
            <Link to="/shop?category=文学" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">文学</Link>
          </div>

          {/* Search + Cart */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="搜索书籍..."
                className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 w-48 transition-all focus:w-64"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>

            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {items.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Link to="/cart" className="relative p-2 text-gray-600">
              <ShoppingCart className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {items.length}
                </span>
              )}
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-gray-600">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="搜索书籍..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </form>
          <div className="flex flex-col gap-2">
            {[['/', '首页'], ['/shop', '书库'], ['/shop?category=技术', '技术'], ['/shop?category=商业', '商业'], ['/shop?category=文学', '文学']].map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setMobileOpen(false)}
                className="py-2 px-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg font-medium transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
