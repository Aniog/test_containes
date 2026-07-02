import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
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

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory-cream/95 backdrop-blur-sm border-b border-divider'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl lg:text-2xl font-medium tracking-widest uppercase transition-colors duration-300 ${
                transparent ? 'text-on-dark' : 'text-ink'
              }`}
            >
              Velmora
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-manrope text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold-dust ${
                    transparent ? 'text-on-dark/80' : 'text-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`hidden lg:flex transition-colors duration-300 hover:text-gold-dust ${
                  transparent ? 'text-on-dark/80' : 'text-muted'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-300 hover:text-gold-dust ${
                  transparent ? 'text-on-dark/80' : 'text-muted'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold-dust text-obsidian text-[9px] font-manrope font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`lg:hidden transition-colors duration-300 hover:text-gold-dust ${
                  transparent ? 'text-on-dark/80' : 'text-muted'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-ivory-cream border-t border-divider animate-fade-in">
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-manrope text-sm tracking-widest uppercase text-muted hover:text-gold-dust transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-divider">
                <button className="flex items-center gap-2 font-manrope text-sm text-muted hover:text-gold-dust transition-colors duration-300">
                  <Search size={16} strokeWidth={1.5} />
                  Search
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
