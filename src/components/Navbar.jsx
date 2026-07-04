import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/hooks/useCart'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  const navLinkClass = `font-sans text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
    transparent ? 'text-white hover:text-white/70' : 'text-foreground hover:text-accent'
  }`

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-base/95 backdrop-blur-md border-b border-divider'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${transparent ? 'text-white' : 'text-foreground'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${transparent ? 'text-white' : 'text-foreground'}`} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.15em] font-medium transition-colors duration-300 ${
                transparent ? 'text-white' : 'text-foreground'
              }`}
            >
              VELMORA
            </Link>

            {/* Center links - desktop */}
            <div className="hidden md:flex items-center gap-10">
              <Link to="/shop" className={navLinkClass}>
                Shop
              </Link>
              <Link to="/shop?category=earrings" className={navLinkClass}>
                Collections
              </Link>
              <Link to="/#story" className={navLinkClass}>
                About
              </Link>
              <Link to="/" className={navLinkClass}>
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 ${
                  transparent ? 'text-white hover:text-white/70' : 'text-foreground hover:text-accent'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 ${
                  transparent ? 'text-white hover:text-white/70' : 'text-foreground hover:text-accent'
                }`}
                onClick={openCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-base pt-20 px-5 md:hidden">
          <div className="flex flex-col gap-6 py-8">
            <Link
              to="/shop"
              className="font-serif text-2xl text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop?category=earrings"
              className="font-serif text-2xl text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/#story"
              className="font-serif text-2xl text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/"
              className="font-serif text-2xl text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
