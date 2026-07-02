import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' : 'bg-background py-6'
      } text-foreground`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest uppercase flex-1 md:flex-none text-center md:text-left z-50">
          VELMORA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide">
          <Link to="/collections/all" className="hover:text-accent transition-colors">SHOP</Link>
          <Link to="/collections/all?category=Earrings" className="hover:text-accent transition-colors">COLLECTIONS</Link>
          <Link to="#" className="hover:text-accent transition-colors">ABOUT</Link>
          <Link to="#" className="hover:text-accent transition-colors">JOURNAL</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 z-50">
          <button className="hover:text-accent transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            className="hover:text-accent transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 font-serif text-2xl">
          <Link to="/collections/all" onClick={() => setIsMobileMenuOpen(false)}>Shop All</Link>
          <Link to="/collections/all?category=Earrings" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
        </div>
      </div>
    </header>
  )
}