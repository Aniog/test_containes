import React from 'react'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const { totalItems, setIsDrawerOpen } = useCart()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-velmora-base' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${scrolled || !isHome ? 'text-velmora-base' : 'text-white'}`} />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-1 md:flex-none text-center md:text-left">
              <h1
                className={`font-serif text-2xl md:text-3xl tracking-widest-xl transition-colors duration-500 ${
                  scrolled || !isHome ? 'text-velmora-base' : 'text-white'
                }`}
              >
                VELMORA
              </h1>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-velmora-gold ${
                    scrolled || !isHome ? 'text-velmora-base' : 'text-white/90'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 hover:text-velmora-gold ${
                  scrolled || !isHome ? 'text-velmora-base' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-velmora-gold ${
                  scrolled || !isHome ? 'text-velmora-base' : 'text-white'
                }`}
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-cream pt-20 md:hidden">
          <nav className="flex flex-col items-center gap-8 pt-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                className="text-sm tracking-widest uppercase text-velmora-base hover:text-velmora-gold transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
