import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { itemCount, openCart } = useCart()

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

  const isHome = location.pathname === '/'
  const navSurfaceClass =
    isHome && !isScrolled
      ? 'bg-transparent text-ivory'
      : 'border-b border-line bg-pearl/95 text-ink backdrop-blur-xl'

  const iconButtonClass =
    isHome && !isScrolled
      ? 'border-line-inverse text-ivory hover:border-champagne hover:text-champagne'
      : 'border-line text-ink hover:border-champagne hover:text-champagne-deep'

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${navSurfaceClass}`}>
        <div className="section-shell flex h-20 items-center justify-between gap-4 md:h-24">
          <div className="flex items-center gap-3 md:w-1/3">
            <button
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 md:hidden ${iconButtonClass}`}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link to="/" className="font-serif text-3xl tracking-[0.28em]">
              VELMORA
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex md:w-1/3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.22em] transition duration-300 ${
                    isActive ? 'text-champagne' : 'hover:text-champagne'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3 md:w-1/3">
            <button
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${iconButtonClass}`}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${iconButtonClass}`}
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-semibold text-velvet">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={[
          'fixed inset-0 z-[60] bg-velvet/50 backdrop-blur-sm transition duration-300 md:hidden',
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <div
          className={[
            'ml-auto flex h-full w-[86vw] max-w-sm flex-col bg-pearl px-5 py-6 shadow-luxe transition duration-300',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          <div className="flex items-center justify-between border-b border-line pb-5">
            <span className="font-serif text-2xl tracking-[0.22em] text-ink">VELMORA</span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition duration-300 hover:border-champagne hover:text-champagne-deep"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-5 py-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="font-serif text-3xl text-ink transition duration-300 hover:text-champagne-deep"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-velvet px-5 py-3 text-sm uppercase tracking-[0.18em] text-ivory transition duration-300 hover:bg-velvet-soft"
            onClick={() => {
              openCart()
              setIsMenuOpen(false)
            }}
          >
            View Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
