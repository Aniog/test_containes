import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '@/lib/store'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setIsOpen, items } = useCartStore()
  const location = useLocation()
  
  const isHome = location.pathname === '/'

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/' },
    { name: 'Journal', path: '/' },
  ]

  return (
    <header 
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled || !isHome || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-sm border-b border-border py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className={cn(
            "font-serif tracking-[0.25em] uppercase text-2xl absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 transition-colors",
            (!isScrolled && isHome && !isMobileMenuOpen) ? "text-foreground drop-shadow-sm" : "text-foreground"
          )}
        >
          Velmora
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors",
                (!isScrolled && isHome) ? "text-foreground drop-shadow-sm" : "text-foreground/80 hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className={cn(
            "p-2 -mr-2 transition-colors",
            (!isScrolled && isHome && !isMobileMenuOpen) ? "text-foreground" : "text-foreground/80 hover:text-foreground"
          )}>
            <Search className="h-5 w-5" />
          </button>
          <button 
            className={cn(
              "p-2 -mr-2 relative transition-colors items-center flex",
              (!isScrolled && isHome && !isMobileMenuOpen) ? "text-foreground" : "text-foreground/80 hover:text-foreground"
            )}
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute top-1.5 right-1 h-3.5 w-3.5 rounded-full bg-primary text-[9px] font-medium text-primary-foreground flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-lg font-serif tracking-wider uppercase py-2 border-b border-border/50 text-foreground"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 py-4 opacity-70">
            <span className="text-sm">Currency: USD</span>
            <span className="text-sm">Language: EN</span>
          </div>
        </div>
      )}
    </header>
  )
}