import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-parchment border-b border-linen shadow-sm'

  const textColor = isHome && !scrolled ? 'text-cream' : 'text-ink'
  const logoColor = isHome && !scrolled ? 'text-cream' : 'text-ink'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className={`font-serif text-xl md:text-2xl font-light tracking-widest uppercase ${logoColor} transition-colors duration-400`}>
              Velmora
            </Link>

            {/* Center nav links — desktop */}
            <div className={`hidden md:flex items-center gap-8 ${textColor}`}>
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/about' },
                { label: 'Journal', to: '/journal' },
              ].map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-xs tracking-widest uppercase hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-4 ${textColor}`}>
              <button
                aria-label="Search"
                className="hidden md:flex hover:text-gold transition-colors duration-300"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className="relative hover:text-gold transition-colors duration-300"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-cream text-xs w-4 h-4 rounded-full flex items-center justify-center font-sans font-600 leading-none">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                aria-label="Menu"
                className="md:hidden hover:text-gold transition-colors duration-300"
                onClick={() => setMobileOpen(v => !v)}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-parchment transition-transform duration-400 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {[
            { label: 'Shop', to: '/shop' },
            { label: 'Collections', to: '/shop' },
            { label: 'About', to: '/about' },
            { label: 'Journal', to: '/journal' },
          ].map(link => (
            <Link
              key={link.label}
              to={link.to}
              className="font-serif text-3xl font-light tracking-wide text-ink hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
