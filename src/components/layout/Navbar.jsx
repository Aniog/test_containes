import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X, Package } from 'lucide-react'
import { useCart } from '../../lib/CartContext'

export default function Navbar() {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      setMenuOpen(false)
    }
  }

  const categories = ['书写工具', '纸张文具', '办公设备', '收纳整理', '桌面用品', '打印耗材']

  return (
    <header className="bg-[#1E3A5F] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white hover:text-blue-200 transition-colors">
            <Package className="w-7 h-7 text-orange-400" />
            <span>办公优选</span>
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="搜索办公用品..."
                className="w-full pl-4 pr-10 py-2 rounded-lg text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/products" className="text-slate-200 hover:text-white text-sm transition-colors">全部商品</Link>
            <Link to="/cart" className="relative flex items-center gap-1 text-slate-200 hover:text-white transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm">购物车</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-3">
            <Link to="/cart" className="relative text-slate-200 hover:text-white">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-200 hover:text-white">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Category bar - desktop */}
        <div className="hidden md:flex items-center gap-1 pb-2 overflow-x-auto">
          {categories.map(cat => (
            <Link
              key={cat}
              to={`/products?category=${encodeURIComponent(cat)}`}
              className="text-xs text-slate-300 hover:text-white hover:bg-white/10 px-3 py-1 rounded-full whitespace-nowrap transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#162d4a] border-t border-white/10 px-4 py-4 space-y-3">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="搜索办公用品..."
              className="flex-1 px-3 py-2 rounded-lg text-slate-900 bg-white placeholder-slate-400 focus:outline-none text-sm"
            />
            <button type="submit" className="bg-orange-500 text-white px-3 py-2 rounded-lg">
              <Search className="w-4 h-4" />
            </button>
          </form>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="block text-slate-200 hover:text-white py-1">全部商品</Link>
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map(cat => (
              <Link
                key={cat}
                to={`/products?category=${encodeURIComponent(cat)}`}
                onClick={() => setMenuOpen(false)}
                className="text-xs text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
