import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5F1] border-b border-[#E5DFD3]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#2C2823]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em]">
          <Link to="/shop" className="hover:text-[#B8976E] transition-colors">Shop</Link>
          <Link to="/shop" className="hover:text-[#B8976E] transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-[#B8976E] transition-colors">About</Link>
          <a href="#journal" className="hover:text-[#B8976E] transition-colors">Journal</a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button className="p-2 hover:text-[#B8976E] transition-colors">
            <Search size={18} />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-[#B8976E] transition-colors relative"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B8976E] text-[#2C2823] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
