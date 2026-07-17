import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/api/cart'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { items, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 md:px-12 flex items-center justify-between',
        isScrolled ? 'bg-background shadow-sm py-4' : 'bg-transparent text-white'
      )}
    >
      <div className="flex-1 hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em]">
        <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
        <Link to="/collections" className="hover:opacity-70 transition-opacity">Collections</Link>
        <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
        <Link to="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <Link to="/" className="flex-1 text-center font-serif text-2xl tracking-[0.3em] font-medium">
        VELMORA
      </Link>

      <div className="flex-1 flex items-center justify-end gap-6">
        <button className="hover:opacity-70 transition-opacity">
          <Search className="w-5 h-5" />
        </button>
        <button onClick={openCart} className="hover:opacity-70 transition-opacity relative">
          <ShoppingBag className="w-5 h-5" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-foreground text-background text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
              {items.length}
            </span>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[60] p-12 flex flex-col items-center justify-center gap-8 uppercase tracking-[0.2em] text-sm text-foreground">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8">
            <X className="w-6 h-6" />
          </button>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
        </div>
      )}
    </nav>
  )
}
