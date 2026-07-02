import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/' },
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

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-cream/95 backdrop-blur-sm border-b border-hairline'

  const textColor = isHome && !scrolled ? 'text-cream' : 'text-obsidian'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className={`font-cormorant text-xl md:text-2xl font-light tracking-[0.2em] uppercase ${textColor} transition-colors duration-400`}>
              Velmora
            </Link>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-manrope text-xs uppercase tracking-[0.12em] ${textColor} hover:text-gold transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`${textColor} hover:text-gold transition-colors duration-300 hidden md:block`}
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                className={`${textColor} hover:text-gold transition-colors duration-300 relative`}
                aria-label="Cart"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-obsidian text-[10px] font-manrope font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>
              {/* Mobile menu toggle */}
              <button
                className={`md:hidden ${textColor} hover:text-gold transition-colors duration-300`}
                onClick={() => setMobileOpen(v => !v)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-cream transition-transform duration-400 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <div className="flex flex-col gap-6">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="font-cormorant text-3xl font-light text-obsidian hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto border-t border-hairline pt-6">
            <p className="font-manrope text-xs text-taupe uppercase tracking-[0.12em]">Free Worldwide Shipping · 30-Day Returns</p>
          </div>
        </div>
      </div>
    </>
  )
}
