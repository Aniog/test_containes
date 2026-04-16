import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ShoppingBag, Search, Menu, X, BookOpen } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const { count, setIsOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/books?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const navLinks = [
    { label: '全部书目', to: '/books' },
    { label: '文学', to: '/books?category=文学' },
    { label: '历史', to: '/books?category=历史' },
    { label: '科学', to: '/books?category=科学' },
    { label: '哲学', to: '/books?category=哲学' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <BookOpen className="w-5 h-5 text-foreground" />
            <span className="font-serif text-lg font-medium tracking-widest text-foreground">
              字里行间
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="搜索书名..."
                  className="w-36 pl-3 pr-8 py-1.5 text-sm bg-secondary border border-border rounded-full font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:w-48 transition-all"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground bg-transparent border-0 p-0">
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Cart */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-foreground hover:text-accent transition-colors bg-transparent border-0"
              aria-label="购物车"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-sans font-medium">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-foreground bg-transparent border-0"
              aria-label="菜单"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="搜索书名..."
                className="flex-1 px-3 py-2 text-sm bg-secondary border border-border rounded-lg font-sans text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button type="submit" className="p-2 bg-primary text-primary-foreground rounded-lg border-0">
                <Search className="w-4 h-4" />
              </button>
            </form>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-2 font-sans text-sm text-foreground border-b border-border/50 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
