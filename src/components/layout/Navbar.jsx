import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,25,23,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -ml-2 text-warm-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Center nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link to="/shop" className="text-xs tracking-super-wide uppercase text-warm-dark/70 hover:text-warm-dark transition-colors font-sans">
            Shop
          </Link>
          <Link to="/shop?category=Earrings" className="text-xs tracking-super-wide uppercase text-warm-dark/70 hover:text-warm-dark transition-colors font-sans">
            Collections
          </Link>
          <Link to="/about" className="text-xs tracking-super-wide uppercase text-warm-dark/70 hover:text-warm-dark transition-colors font-sans">
            About
          </Link>
          <Link to="/journal" className="text-xs tracking-super-wide uppercase text-warm-dark/70 hover:text-warm-dark transition-colors font-sans">
            Journal
          </Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-super-wide transition-colors duration-500 ${
            scrolled ? 'text-warm-dark' : 'text-warm-dark'
          } absolute left-1/2 -translate-x-1/2`}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-3">
          <button className="p-2 text-warm-dark/70 hover:text-warm-dark transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <button
            className="p-2 text-warm-dark/70 hover:text-warm-dark transition-colors relative"
            onClick={toggleCart}
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-gold text-warm-dark text-[10px] font-sans font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center leading-none">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream/98 backdrop-blur-md border-t border-warm-dark/5 px-4 py-4 flex flex-col gap-3">
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-sm tracking-widest uppercase text-warm-dark/70 hover:text-warm-dark transition-colors font-sans py-2">
            Shop
          </Link>
          <Link to="/shop?category=Earrings" onClick={() => setMobileOpen(false)} className="text-sm tracking-widest uppercase text-warm-dark/70 hover:text-warm-dark transition-colors font-sans py-2">
            Collections
          </Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="text-sm tracking-widest uppercase text-warm-dark/70 hover:text-warm-dark transition-colors font-sans py-2">
            About
          </Link>
          <Link to="/journal" onClick={() => setMobileOpen(false)} className="text-sm tracking-widest uppercase text-warm-dark/70 hover:text-warm-dark transition-colors font-sans py-2">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  )
}