import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
  const navText = scrolled || !isHome ? 'text-foreground' : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 -ml-2 ${navText}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link to="/" className={`serif-heading text-xl md:text-2xl tracking-widest ${navText}`}>
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className={`nav-link ${navText}`}>Shop</Link>
              <Link to="/shop" className={`nav-link ${navText}`}>Collections</Link>
              <Link to="/about" className={`nav-link ${navText}`}>About</Link>
              <Link to="/journal" className={`nav-link ${navText}`}>Journal</Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className={`p-2 ${navText} hover:text-primary transition-colors`} aria-label="Search">
                <Search size={18} />
              </button>
              <button
                onClick={toggleDrawer}
                className={`p-2 ${navText} hover:text-primary transition-colors relative`}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            <Link to="/shop" className="serif-heading text-2xl tracking-wider">Shop</Link>
            <Link to="/shop" className="serif-heading text-2xl tracking-wider">Collections</Link>
            <Link to="/about" className="serif-heading text-2xl tracking-wider">About</Link>
            <Link to="/journal" className="serif-heading text-2xl tracking-wider">Journal</Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
