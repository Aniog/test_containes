import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

function Navbar() {
  const location = useLocation()
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  const isHomeHero = location.pathname === '/' && !isScrolled && !isMenuOpen
  const shellClasses = isHomeHero
    ? 'bg-transparent text-velmora-cream'
    : 'border-b border-velmora-cream/10 bg-velmora-espresso/88 text-velmora-cream backdrop-blur-xl'

  const linkClasses = isHomeHero
    ? 'text-velmora-cream/85 hover:text-velmora-cream'
    : 'text-velmora-cream/75 hover:text-velmora-cream'

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-30 transition duration-500 ${shellClasses}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 lg:px-10">
          <Link to="/" className="font-display text-3xl tracking-logo text-current md:text-[2.2rem]">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-xs uppercase tracking-product transition ${linkClasses}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="rounded-full border border-white/10 p-3 text-current transition hover:border-velmora-gold hover:text-velmora-gold"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative rounded-full border border-white/10 p-3 text-current transition hover:border-velmora-gold hover:text-velmora-gold"
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ink">
                  {itemCount}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="rounded-full border border-white/10 p-3 text-current transition hover:border-velmora-gold hover:text-velmora-gold md:hidden"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-20 bg-velmora-espresso/96 px-5 pt-28 text-velmora-cream transition md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="space-y-5 border-t border-velmora-cream/10 pt-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block font-display text-4xl tracking-editorial text-velmora-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Navbar
