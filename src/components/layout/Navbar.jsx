import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { setIsCartOpen, totalItems } = useCart()
  const location = useLocation()
  
  const isHomepage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = `fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out ${
    isScrolled || !isHomepage
      ? 'bg-background/95 backdrop-blur-md border-b text-foreground'
      : 'bg-transparent text-white'
  }`

  return (
    <header className={navClass}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1">
          <button className="p-2 -ml-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link to="/" className="font-serif text-2xl tracking-widest font-bold uppercase transition-opacity hover:opacity-80">
            Velmora
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          <Link to="/shop" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/collections" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">Collections</Link>
          <Link to="/about" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">About</Link>
          <Link to="/journal" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">Journal</Link>
        </nav>

        {/* Icons */}
        <div className="flex-1 flex justify-end items-center space-x-4 md:space-x-6">
          <button className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="hover:opacity-70 transition-opacity flex items-center relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
