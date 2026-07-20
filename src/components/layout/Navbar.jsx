import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X, Minus, Plus } from 'lucide-react'
import { useCartStore } from '../../lib/store'
import { cn } from '../../lib/utils'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const cartCount = useCartStore((state) => state.getCartCount())
  const openCart = useCartStore((state) => state.openCart)
  const location = useLocation()
  
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled || !isHome || mobileMenuOpen
          ? 'bg-background shadow-sm py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Left */}
        <nav className="hidden md:flex items-center gap-8 w-1/3">
          <Link to="/shop" className={cn(
            "text-sm tracking-widest uppercase hover:text-primary transition-colors font-medium",
            (!isScrolled && isHome && !mobileMenuOpen) ? "text-white hover:text-white/80" : "text-foreground"
          )}>
            Shop
          </Link>
          <Link to="/collections" className={cn(
            "text-sm tracking-widest uppercase hover:text-primary transition-colors font-medium",
            (!isScrolled && isHome && !mobileMenuOpen) ? "text-white hover:text-white/80" : "text-foreground"
          )}>
            Collections
          </Link>
        </nav>

        {/* Logo Center */}
        <div className="w-1/3 flex justify-center text-center">
          <Link 
            to="/" 
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-widest uppercase",
              (!isScrolled && isHome && !mobileMenuOpen) ? "text-white" : "text-foreground"
            )}
          >
            Velmora
          </Link>
        </div>

        {/* Nav Right */}
        <div className="w-1/3 flex items-center justify-end gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/about" className={cn(
              "text-sm tracking-widest uppercase hover:text-primary transition-colors font-medium",
              (!isScrolled && isHome && !mobileMenuOpen) ? "text-white hover:text-white/80" : "text-foreground"
            )}>
              About
            </Link>
            <Link to="/journal" className={cn(
              "text-sm tracking-widest uppercase hover:text-primary transition-colors font-medium",
              (!isScrolled && isHome && !mobileMenuOpen) ? "text-white hover:text-white/80" : "text-foreground"
            )}>
              Journal
            </Link>
          </nav>
          
          <button className={cn(
            "hover:text-primary transition-colors",
            (!isScrolled && isHome && !mobileMenuOpen) ? "text-white hover:text-white/80" : "text-foreground"
          )}>
            <Search size={20} strokeWidth={1.5} />
          </button>
          
          <button 
            className={cn(
              "relative hover:text-primary transition-colors",
              (!isScrolled && isHome && !mobileMenuOpen) ? "text-white hover:text-white/80" : "text-foreground"
            )}
            onClick={openCart}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          <Link to="/shop" className="text-sm tracking-widest uppercase text-foreground py-2 border-b border-border/50" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/collections" className="text-sm tracking-widest uppercase text-foreground py-2 border-b border-border/50" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
          <Link to="/about" className="text-sm tracking-widest uppercase text-foreground py-2 border-b border-border/50" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/journal" className="text-sm tracking-widest uppercase text-foreground py-2 border-b border-border/50" onClick={() => setMobileMenuOpen(false)}>Journal</Link>
        </div>
      )}
    </header>
  )
}