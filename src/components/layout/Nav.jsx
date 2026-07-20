import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/' },
]

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

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-parchment/95 backdrop-blur-sm border-b border-linen shadow-sm'

  const textColor = isHome && !scrolled ? 'text-parchment' : 'text-ink'
  const logoColor = isHome && !scrolled ? 'text-parchment' : 'text-obsidian'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`font-serif text-xl md:text-2xl font-light tracking-[0.18em] uppercase ${logoColor} transition-colors duration-400`}>
            Velmora
          </Link>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-sans text-[11px] font-medium uppercase tracking-widest ${textColor} hover:text-gold transition-colors duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`${textColor} hover:text-gold transition-colors duration-300 hidden md:block`}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setIsOpen(true)}
              className={`${textColor} hover:text-gold transition-colors duration-300 relative`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
            {/* Mobile menu toggle */}
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(v => !v)}
              className={`md:hidden ${textColor} hover:text-gold transition-colors duration-300`}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-parchment border-t border-linen px-6 py-6 flex flex-col gap-5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-[12px] font-medium uppercase tracking-widest text-ink hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
