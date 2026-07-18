import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext.jsx'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setIsCartOpen, itemCount } = useCart()
  const location = useLocation()
  const isHomeTop = location.pathname === '/' && !isScrolled

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setIsMenuOpen(false), [location.pathname])

  const surfaceClass = isHomeTop
    ? 'bg-velmora-espresso/10 text-velmora-pearl border-velmora-pearl/20'
    : 'bg-velmora-ivory/95 text-velmora-ink border-velmora-linen shadow-sm backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${surfaceClass}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8" aria-label="Main navigation">
        <button
          type="button"
          className="inline-flex rounded-full p-2 transition hover:bg-velmora-champagne/15 lg:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.2em] sm:text-3xl" aria-label="Velmora home">
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className="text-xs font-bold uppercase tracking-nav transition hover:text-velmora-champagne">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <button type="button" className="rounded-full p-2 transition hover:bg-velmora-champagne/15" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative rounded-full p-2 transition hover:bg-velmora-champagne/15"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-velmora-champagne text-[0.65rem] font-bold text-velmora-espresso">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-espresso/70 backdrop-blur-sm lg:hidden">
          <div className="ml-auto flex h-full w-80 max-w-[86vw] flex-col bg-velmora-ivory p-6 text-velmora-ink shadow-velmora">
            <div className="mb-10 flex items-center justify-between">
              <span className="font-serif text-2xl font-semibold tracking-[0.2em]">VELMORA</span>
              <button type="button" className="rounded-full border border-velmora-linen p-2" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.href} className="border-b border-velmora-linen pb-4 text-sm font-bold uppercase tracking-nav">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
