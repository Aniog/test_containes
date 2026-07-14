import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
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

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-obsidian shadow-sm'

  const textColor = isHome && !scrolled ? 'text-ivory' : 'text-ivory'

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#about' },
    { label: 'Journal', to: '/' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className={`font-serif text-xl md:text-2xl font-light tracking-widest uppercase ${textColor} hover:text-gold transition-colors duration-300`}>
              Velmora
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs tracking-widest uppercase font-medium ${textColor} hover:text-gold transition-colors duration-300 relative group`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className={`${textColor} hover:text-gold transition-colors duration-300 hidden md:block`} aria-label="Search">
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                className={`${textColor} hover:text-gold transition-colors duration-300 relative`}
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center font-sans leading-none">
                    {count}
                  </span>
                )}
              </button>
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

        {/* Mobile Menu */}
        <div className={`md:hidden bg-obsidian transition-all duration-400 overflow-hidden ${mobileOpen ? 'max-h-80 border-t border-stone/30' : 'max-h-0'}`}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-xs tracking-widest uppercase font-medium text-ivory hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-stone/30">
              <button className="text-ivory hover:text-gold transition-colors duration-300 flex items-center gap-2 font-sans text-xs tracking-widest uppercase">
                <Search size={16} strokeWidth={1.5} /> Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
