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
    : 'bg-ivory/95 backdrop-blur-sm shadow-sm'

  const textColor = isHome && !scrolled
    ? 'text-ivory'
    : 'text-charcoal'

  const logoColor = isHome && !scrolled
    ? 'text-champagne'
    : 'text-champagne-dark'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className={`font-serif text-xl md:text-2xl font-light tracking-widest uppercase ${logoColor} transition-colors duration-400`}>
              Velmora
            </Link>

            {/* Center nav links — desktop */}
            <div className={`hidden md:flex items-center gap-10 ${textColor}`}>
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/#story' },
                { label: 'Journal', to: '/' },
              ].map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-xs tracking-widest uppercase font-medium hover:text-champagne transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-4 ${textColor}`}>
              <button
                aria-label="Search"
                className="hidden md:flex hover:text-champagne transition-colors duration-300"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className="relative hover:text-champagne transition-colors duration-300"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-champagne text-obsidian text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                aria-label="Menu"
                className="md:hidden hover:text-champagne transition-colors duration-300"
                onClick={() => setMobileOpen(v => !v)}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden bg-ivory border-t border-divider transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {[
              { label: 'Shop', to: '/shop' },
              { label: 'Collections', to: '/shop' },
              { label: 'About', to: '/' },
              { label: 'Journal', to: '/' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-xs tracking-widest uppercase font-medium text-charcoal hover:text-champagne transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
