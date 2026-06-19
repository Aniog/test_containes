import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, setIsOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[hsl(var(--surface))] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className="serif-heading text-xl md:text-2xl font-semibold tracking-[0.25em]">
              Velmora
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className="text-sm uppercase tracking-wider hover:text-[hsl(var(--accent))] transition-colors">
                Shop
              </Link>
              <Link to="/shop" className="text-sm uppercase tracking-wider hover:text-[hsl(var(--accent))] transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-sm uppercase tracking-wider hover:text-[hsl(var(--accent))] transition-colors">
                About
              </Link>
              <Link to="/journal" className="text-sm uppercase tracking-wider hover:text-[hsl(var(--accent))] transition-colors">
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:text-[hsl(var(--accent))] transition-colors" aria-label="Search">
                <Search size={20} />
              </button>
              <button
                className="p-2 hover:text-[hsl(var(--accent))] transition-colors relative"
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[hsl(var(--accent))] text-white text-[10px] rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[hsl(var(--surface))] md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link to="/shop" className="serif-heading text-2xl tracking-[0.2em]">Shop</Link>
            <Link to="/shop" className="serif-heading text-2xl tracking-[0.2em]">Collections</Link>
            <Link to="/about" className="serif-heading text-2xl tracking-[0.2em]">About</Link>
            <Link to="/journal" className="serif-heading text-2xl tracking-[0.2em]">Journal</Link>
          </div>
        </div>
      )}
    </>
  )
}
