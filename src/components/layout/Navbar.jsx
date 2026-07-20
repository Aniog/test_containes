import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, setIsOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <Link to="/shop" className="text-xs tracking-widest uppercase hover:text-accent transition-colors">
                Shop
              </Link>
              <Link to="/shop" className="text-xs tracking-widest uppercase hover:text-accent transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-xs tracking-widest uppercase hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/journal" className="text-xs tracking-widest uppercase hover:text-accent transition-colors">
                Journal
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <button className="hover:text-accent transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="relative hover:text-accent transition-colors"
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>
              <button
                className="md:hidden hover:text-accent transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <Link to="/" className="serif-heading text-2xl tracking-wider" onClick={() => setMobileOpen(false)}>
              VELMORA
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] gap-8">
            <Link to="/shop" className="serif-heading text-3xl" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link to="/shop" className="serif-heading text-3xl" onClick={() => setMobileOpen(false)}>Collections</Link>
            <Link to="/about" className="serif-heading text-3xl" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/journal" className="serif-heading text-3xl" onClick={() => setMobileOpen(false)}>Journal</Link>
          </div>
        </div>
      )}
    </>
  )
}
