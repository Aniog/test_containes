import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart, useCartDrawer } from '../../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount } = useCart()
  const { openDrawer } = useCartDrawer()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent text-white'
          : 'bg-white/95 backdrop-blur-sm text-velmora shadow-[0_1px_0_0_rgba(48,36,28,0.06)]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center nav links */}
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/shop" className="text-[0.8125rem] tracking-wider uppercase font-medium hover:text-velmora-muted transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="text-[0.8125rem] tracking-wider uppercase font-medium hover:text-velmora-muted transition-colors">
              Earrings
            </Link>
            <Link to="/shop?category=necklaces" className="text-[0.8125rem] tracking-wider uppercase font-medium hover:text-velmora-muted transition-colors">
              Necklaces
            </Link>
            <Link to="/shop?category=huggies" className="text-[0.8125rem] tracking-wider uppercase font-medium hover:text-velmora-muted transition-colors">
              Huggies
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl lg:text-[1.75rem] tracking-[0.2em] font-semibold"
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1 lg:gap-3">
            <button className="p-2 hover:text-velmora-muted transition-colors" aria-label="Search">
              <Search size={19} strokeWidth={1.5} />
            </button>
            <button
              className="p-2 hover:text-velmora-muted transition-colors relative"
              onClick={openDrawer}
              aria-label="Cart"
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-velmora text-white text-[0.6rem] font-sans font-semibold rounded-full flex items-center justify-center leading-none">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-velmora-rose px-6 py-8 flex flex-col gap-5">
          <Link to="/shop" className="text-sm tracking-wider uppercase font-medium">Shop All</Link>
          <Link to="/shop?category=earrings" className="text-sm tracking-wider uppercase font-medium">Earrings</Link>
          <Link to="/shop?category=necklaces" className="text-sm tracking-wider uppercase font-medium">Necklaces</Link>
          <Link to="/shop?category=huggies" className="text-sm tracking-wider uppercase font-medium">Huggies</Link>
        </div>
      </div>
    </nav>
  )
}
