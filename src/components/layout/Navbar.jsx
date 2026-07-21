import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleDrawer, totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            className="md:hidden p-2 -ml-2 text-[#1a1a1a]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-sm tracking-wide transition-colors',
                  location.pathname === link.to ? 'text-[#c9a96e]' : 'text-[#1a1a1a] hover:text-[#c9a96e]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2 font-serif text-xl tracking-widest text-[#1a1a1a]">
            VELMORA
          </Link>

          <div className="flex items-center gap-4">
            <button type="button" className="p-2 text-[#1a1a1a] hover:text-[#c9a96e]" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="relative p-2 text-[#1a1a1a] hover:text-[#c9a96e]"
              onClick={toggleDrawer}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#c9a96e] text-[10px] font-medium text-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        <nav className="hidden md:flex items-center justify-center gap-8 pb-3">
          {navLinks.slice(3).map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-sm tracking-wide transition-colors',
                location.pathname === link.to ? 'text-[#c9a96e]' : 'text-[#1a1a1a] hover:text-[#c9a96e]'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#f0f0f0]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm tracking-wide text-[#1a1a1a] hover:text-[#c9a96e]"
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

export default Navbar
