import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location])

  const navBg = scrolled
    ? 'bg-velmora-light/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-velmora-light'

  const textColor = scrolled || !isHome
    ? 'text-velmora-dark'
    : 'text-velmora-light'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase ${textColor} transition-colors duration-300`}>
          VELMORA
        </Link>

        {/* Center links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`font-sans text-sm tracking-[0.1em] uppercase ${textColor} hover:text-velmora-gold transition-colors duration-300`}>Shop</Link>
          <Link to="/shop?view=collections" className={`font-sans text-sm tracking-[0.1em] uppercase ${textColor} hover:text-velmora-gold transition-colors duration-300`}>Collections</Link>
          <Link to="/about" className={`font-sans text-sm tracking-[0.1em] uppercase ${textColor} hover:text-velmora-gold transition-colors duration-300`}>About</Link>
          <Link to="/journal" className={`font-sans text-sm tracking-[0.1em] uppercase ${textColor} hover:text-velmora-gold transition-colors duration-300`}>Journal</Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          {searchOpen ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search jewelry..."
                className="w-40 md:w-56 bg-transparent border-b border-current px-2 py-1 text-sm font-sans outline-none placeholder:text-stone-400"
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)} className={`${textColor} hover:text-velmora-gold transition-colors`}>
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button onClick={() => setSearchOpen(true)} className={`${textColor} hover:text-velmora-gold transition-colors duration-300`}>
              <Search className="w-5 h-5" />
            </button>
          )}
          <button onClick={openCart} className={`${textColor} hover:text-velmora-gold transition-colors duration-300 relative`}>
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-velmora-gold text-velmora-dark text-xs font-sans font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden ${textColor} hover:text-velmora-gold transition-colors`}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-light border-t border-stone-200 px-4 py-6">
          <div className="flex flex-col gap-4">
            <Link to="/shop" className="font-sans text-sm tracking-[0.1em] uppercase text-velmora-dark hover:text-velmora-gold">Shop</Link>
            <Link to="/shop?view=collections" className="font-sans text-sm tracking-[0.1em] uppercase text-velmora-dark hover:text-velmora-gold">Collections</Link>
            <Link to="/about" className="font-sans text-sm tracking-[0.1em] uppercase text-velmora-dark hover:text-velmora-gold">About</Link>
            <Link to="/journal" className="font-sans text-sm tracking-[0.1em] uppercase text-velmora-dark hover:text-velmora-gold">Journal</Link>
          </div>
        </div>
      )}
    </header>
  )
}
