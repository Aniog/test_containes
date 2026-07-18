import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext.jsx'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(location.pathname !== '/')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, setIsCartOpen } = useCart()

  useEffect(() => {
    if (location.pathname !== '/') {
      setScrolled(true)
      return undefined
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!location.hash) {
      return undefined
    }

    const id = location.hash.replace('#', '')
    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.hash, location.pathname])

  const handleLinkClick = (to) => {
    if (to.startsWith('/#')) {
      navigate(to)
      return
    }

    navigate(to)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-[var(--color-line-dark)] bg-[rgba(33,24,23,0.9)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 text-[var(--color-text-dark)] md:px-8">
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="text-[var(--color-text-dark)] transition hover:text-[var(--color-accent)]"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.28em] text-[var(--color-text-dark)]"
          >
            VELMORA
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted-dark)] transition hover:text-[var(--color-text-dark)]"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Search"
              className="hidden text-[var(--color-text-dark)] transition hover:text-[var(--color-accent)] md:inline-flex"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              className="relative text-[var(--color-text-dark)] transition hover:text-[var(--color-accent)]"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-accent)] px-1 text-[10px] font-semibold text-[var(--color-bg)]">
                {itemCount}
              </span>
            </button>
          </div>
        </nav>
      </header>

      <div
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-40 bg-black/50 transition md:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        aria-hidden={!mobileOpen}
        className={`fixed left-0 top-0 z-50 flex h-full w-[88vw] max-w-sm flex-col bg-[var(--color-surface-light)] px-6 py-6 text-[var(--color-text-light)] shadow-2xl transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="font-serif text-2xl tracking-[0.28em]">VELMORA</p>
          <button
            type="button"
            aria-label="Close menu"
            className="text-[var(--color-text-light)]"
            onClick={() => setMobileOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 space-y-2">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              className="block w-full rounded-full border border-[var(--color-line-light)] px-5 py-4 text-left text-sm uppercase tracking-[0.25em] text-[var(--color-text-light)] transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
              onClick={() => handleLinkClick(link.to)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="mt-auto rounded-[1.5rem] border border-[var(--color-line-light)] bg-[rgba(33,24,23,0.03)] p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted-light)]">
            Quiet Luxury
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted-light)]">
            Discover luminous layers, softly sculptural earrings, and gifting-ready sets designed for everyday wear.
          </p>
        </div>
      </aside>
    </>
  )
}
