import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 ${scrolled ? 'scrolled bg-[#F8F5F0]' : 'bg-transparent'}`}>
      <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#1A1A1A]">VELMORA</Link>
      
      <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
        <Link to="/shop" className="hover:text-[#C5A26F] transition-colors">Shop</Link>
        <Link to="/shop?category=Collections" className="hover:text-[#C5A26F] transition-colors">Collections</Link>
        <Link to="/about" className="hover:text-[#C5A26F] transition-colors">About</Link>
        <Link to="/journal" className="hover:text-[#C5A26F] transition-colors">Journal</Link>
      </div>

      <div className="flex items-center gap-5">
        <button className="text-[#1A1A1A] hover:text-[#C5A26F] transition-colors">
          <Search size={18} />
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative text-[#1A1A1A] hover:text-[#C5A26F] transition-colors"
        >
          <ShoppingBag size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] bg-[#C5A26F] text-[#0F0F0F] rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}