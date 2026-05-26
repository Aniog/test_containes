import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X, Trophy } from 'lucide-react'
import { useCart } from '../../lib/CartContext'

export default function Navbar() {
  const { totalCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchVal.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchVal.trim())}`)
      setMenuOpen(false)
    }
  }

  const navLinks = [
    { label: '全部商品', to: '/shop' },
    { label: '球衣', to: '/shop?category=jersey' },
    { label: '足球', to: '/shop?category=ball' },
    { label: '收藏品', to: '/shop?category=collectible' },
    { label: '配件', to: '/shop?category=accessory' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E1A]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
              <Trophy className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="text-white font-black text-lg tracking-tight">
              WORLD<span className="text-yellow-400">CUP</span>
              <span className="text-red-500 ml-1">2026</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search + Cart */}
          <div className="flex items-center gap-3">
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchVal}
                  onChange={e => setSearchVal(e.target.value)}
                  placeholder="搜索商品..."
                  className="bg-gray-800 border border-gray-700 text-white text-sm pl-9 pr-4 py-2 rounded-lg w-48 focus:outline-none focus:border-red-600 placeholder-gray-500"
                />
              </div>
            </form>

            <Link to="/cart" className="relative p-2 text-gray-300 hover:text-white transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalCount > 99 ? '99+' : totalCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0E1A] border-t border-gray-800 px-4 py-4 space-y-3">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
                placeholder="搜索商品..."
                className="bg-gray-800 border border-gray-700 text-white text-sm pl-9 pr-4 py-2 rounded-lg w-full focus:outline-none focus:border-red-600 placeholder-gray-500"
              />
            </div>
            <button type="submit" className="bg-red-700 text-white px-3 py-2 rounded-lg text-sm">搜索</button>
          </form>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-white py-2 text-sm font-medium border-b border-gray-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
