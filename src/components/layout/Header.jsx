import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?collection=signature' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, setIsCartOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname, location.search])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${solid ? 'border-velmora-sand/70 bg-velmora-ivory/95 text-velmora-espresso shadow-soft backdrop-blur-xl' : 'border-white/15 bg-transparent text-velmora-pearl'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button type="button" className="velmora-focus -ml-2 rounded-full p-2 text-current md:hidden" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.16em] text-current md:text-4xl">VELMORA</Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.label} to={link.href} className="velmora-focus text-xs font-semibold uppercase tracking-widest text-current/85 transition hover:text-velmora-champagne">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-current">
          <button type="button" className="velmora-focus hidden rounded-full p-2 transition hover:text-velmora-champagne sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" className="velmora-focus relative rounded-full p-2 transition hover:text-velmora-champagne" aria-label="Open cart" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-velmora-champagne text-[10px] font-bold text-velmora-espresso">{count}</span>}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-deep/60 backdrop-blur-sm md:hidden">
          <div className="ml-auto flex h-full w-[84%] max-w-sm flex-col bg-velmora-ivory p-6 text-velmora-espresso shadow-velvet">
            <div className="flex items-center justify-between border-b border-velmora-sand/70 pb-5">
              <span className="font-serif text-3xl font-semibold tracking-[0.16em]">VELMORA</span>
              <button type="button" className="velmora-focus rounded-full p-2" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-10 flex flex-col gap-7">
              {links.map((link) => (
                <Link key={link.label} to={link.href} className="font-serif text-4xl text-velmora-espresso transition hover:text-velmora-antique">{link.label}</Link>
              ))}
            </nav>
            <p className="mt-auto border-t border-velmora-sand/70 pt-6 text-sm leading-6 text-velmora-smoke">Demi-fine gold jewelry for gifting, layering, and everyday rituals.</p>
          </div>
        </div>
      )}
    </header>
  )
}
