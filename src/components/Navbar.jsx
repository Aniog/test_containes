import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag } from 'lucide-react'
import { CartContext } from '../App'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const { cartCount, setIsCartOpen, searchQuery, setSearchQuery } = useContext(CartContext)
  const location = useLocation()

  // Handle scroll for navbar background
  if (typeof window !== 'undefined') {
    window.onscroll = () => setIsScrolled(window.scrollY > 50)
  }

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F8F5F1] border-b border-[#E5DFD3]' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#2C2825]">
          VELMORA
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`transition-colors hover:text-[#B8976E] ${location.pathname === link.path ? 'text-[#B8976E]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="relative">
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 hover:text-[#B8976E] transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            {showSearch && (
              <div className="absolute right-0 top-12 w-72 bg-white border border-[#E5DFD3] p-4 shadow-lg">
                <input
                  type="text"
                  placeholder="Search jewelry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#E5DFD3] text-sm focus:outline-none focus:border-[#B8976E]"
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Cart */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-[#B8976E] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#B8976E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
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