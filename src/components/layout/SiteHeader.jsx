import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections', hash: '#collections' },
  { label: 'About', to: '/#story', hash: '#story' },
  { label: 'Journal', to: '/#journal', hash: '#journal' },
]

function HeaderLink({ closeMenu, link }) {
  const location = useLocation()
  const isActive = link.hash
    ? location.pathname === '/' && location.hash === link.hash
    : location.pathname === link.to

  return (
    <Link
      className={`text-xs uppercase tracking-[0.26em] transition ${
        isActive ? 'text-amber-200' : 'text-stone-300 hover:text-stone-100'
      }`}
      onClick={closeMenu}
      to={link.to}
    >
      {link.label}
    </Link>
  )
}

function MobileHeaderLink({ closeMenu, link }) {
  const location = useLocation()
  const isActive = link.hash
    ? location.pathname === '/' && location.hash === link.hash
    : location.pathname === link.to

  return (
    <Link
      className={`text-sm uppercase tracking-[0.22em] transition ${
        isActive ? 'text-amber-200' : 'text-stone-200 hover:text-amber-200'
      }`}
      onClick={closeMenu}
      to={link.to}
    >
      {link.label}
    </Link>
  )
}

function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36)

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'border-b border-stone-800/80 bg-stone-950/90 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-stone-100 sm:px-6 lg:px-10">
          <button
            aria-label="Open navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-700/70 bg-stone-950/40 text-stone-100 lg:hidden"
            onClick={() => setIsMenuOpen(true)}
            type="button"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link className="font-display text-3xl tracking-[0.35em] text-stone-50" to="/">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <HeaderLink key={link.label} link={link} />
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              aria-label="Search"
              className="icon-button"
              type="button"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-label="Open cart"
              className="icon-button relative"
              onClick={openCart}
              type="button"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-amber-200 px-1 text-[10px] font-semibold text-stone-950">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/55 transition ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } lg:hidden`}
      >
        <aside
          className={`absolute inset-y-0 left-0 w-[82%] max-w-sm border-r border-stone-800 bg-stone-950 px-6 py-6 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <Link
              className="font-display text-2xl tracking-[0.3em] text-stone-50"
              onClick={() => setIsMenuOpen(false)}
              to="/"
            >
              VELMORA
            </Link>
            <button
              aria-label="Close navigation"
              className="icon-button"
              onClick={() => setIsMenuOpen(false)}
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <MobileHeaderLink
                closeMenu={() => setIsMenuOpen(false)}
                key={link.label}
                link={link}
              />
            ))}
          </nav>
        </aside>
      </div>
    </>
  )
}

export default SiteHeader
