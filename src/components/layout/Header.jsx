import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomeTop = location.pathname === '/' && !isScrolled

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search])

  const textTone = isHomeTop ? 'text-velmora-pearl' : 'text-velmora-espresso'
  const iconTone = isHomeTop ? 'text-velmora-pearl hover:text-velmora-champagne' : 'text-velmora-espresso hover:text-velmora-gold'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        isHomeTop
          ? 'border-transparent bg-transparent'
          : 'border-b border-velmora-taupe/60 bg-velmora-ivory/95 shadow-sm backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className={`rounded-full p-2 transition md:hidden ${iconTone}`}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        <Link to="/" className={`font-serif text-3xl font-semibold tracking-[0.2em] transition ${textTone}`}>
          VELMORA
        </Link>

        <nav className={`hidden items-center gap-10 text-xs font-bold uppercase tracking-[0.24em] md:flex ${textTone}`}>
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className="transition hover:text-velmora-champagne">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className={`rounded-full p-2 transition ${iconTone}`} aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            className={`relative rounded-full p-2 transition ${iconTone}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-50 md:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-velmora-espresso/45 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className={`absolute left-0 top-0 h-full w-80 max-w-[86vw] bg-velmora-pearl p-6 text-velmora-espresso shadow-soft transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between">
            <span className="font-serif text-3xl tracking-[0.2em]">VELMORA</span>
            <button type="button" onClick={() => setIsMenuOpen(false)} className="rounded-full border border-velmora-taupe p-2" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-12 grid gap-6 text-sm font-bold uppercase tracking-[0.26em]">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} className="border-b border-velmora-taupe/50 pb-4 transition hover:text-velmora-gold">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
