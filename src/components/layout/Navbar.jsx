import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useCart } from '@/store/useCart'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { cartCount, toggleCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navbarClasses = `fixed w-full top-0 z-50 transition-all duration-500 ${
    isScrolled || !isHome || isMobileMenuOpen
      ? 'bg-background/95 backdrop-blur-md border-b border-border py-4 text-foreground'
      : 'bg-transparent py-6 text-primary-foreground'
  }`

  const NavLinks = ({ mobile = false }) => (
    <ul className={`flex ${mobile ? 'flex-col items-center gap-8 text-2xl' : 'items-center gap-8 text-sm'} font-medium tracking-widest uppercase`}>
      <li><Link to="/shop" className="hover:text-primary transition-colors hover-underline">Shop</Link></li>
      <li><Link to="/collections" className="hover:text-primary transition-colors hover-underline">Collections</Link></li>
      <li><Link to="/about" className="hover:text-primary transition-colors hover-underline">About</Link></li>
      <li><Link to="/journal" className="hover:text-primary transition-colors hover-underline">Journal</Link></li>
    </ul>
  )

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Mobile menu toggle */}
        <div className="md:hidden flex-1">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium inline-block">
            VELMORA
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavLinks />
        </div>

        {/* Actions */}
        <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
          <button aria-label="Search" className="hidden md:block hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            aria-label="Cart" 
            className="hover:text-primary transition-colors flex items-center gap-2 group relative"
            onClick={toggleCart}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className={`absolute -top-2 -right-2 w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-medium ${isScrolled || !isHome ? 'bg-primary text-background' : 'bg-background text-foreground'}`}>
              {cartCount()}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-background text-foreground z-40 flex flex-col pt-12 animate-in slide-in-from-top-4 duration-300">
          <NavLinks mobile={true} />
          <div className="mt-12 flex justify-center gap-8 border-t border-border pt-8 px-8">
            <button aria-label="Search" className="flex items-center gap-2 text-sm uppercase tracking-widest">
              <Search className="w-5 h-5" /> Search
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
