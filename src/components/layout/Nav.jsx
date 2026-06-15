import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, setIsOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-parchment/95 backdrop-blur-sm border-b border-divider'

  const textColor = isHome && !scrolled ? 'text-ivory' : 'text-obsidian'
  const logoColor = isHome && !scrolled ? 'text-ivory' : 'text-obsidian'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`font-serif text-xl md:text-2xl font-light tracking-widest2 ${logoColor} transition-colors duration-500`}>
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[['SHOP', '/shop'], ['COLLECTIONS', '/shop'], ['ABOUT', '/#about'], ['JOURNAL', '/#journal']].map(([label, href]) => (
              <Link
                key={label}
                to={href}
                className={`font-manrope text-[11px] tracking-widest font-medium ${textColor} hover:text-gold transition-colors duration-300`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              aria-label="Search"
              className={`${textColor} hover:text-gold transition-colors duration-300 p-1`}
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
            </button>
            <button
              aria-label={`Cart (${count} items)`}
              onClick={() => setIsOpen(true)}
              className={`${textColor} hover:text-gold transition-colors duration-300 p-1 relative`}
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-ivory text-[9px] font-manrope font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {count}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(v => !v)}
              className={`md:hidden ${textColor} hover:text-gold transition-colors duration-300 p-1`}
            >
              {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-parchment transition-transform duration-500 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {[['SHOP', '/shop'], ['COLLECTIONS', '/shop'], ['ABOUT', '/#about'], ['JOURNAL', '/#journal']].map(([label, href]) => (
            <Link
              key={label}
              to={href}
              className="font-serif text-3xl font-light text-obsidian hover:text-gold transition-colors duration-300 tracking-widest"
            >
              {label}
            </Link>
          ))}
          <div className="mt-8 w-16 h-px bg-gold/40" />
          <p className="font-manrope text-xs tracking-widest text-muted">FREE WORLDWIDE SHIPPING</p>
        </div>
      </div>
    </>
  )
}
