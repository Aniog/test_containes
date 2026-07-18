import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop#collections' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function NavBar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || menuOpen
  const textClass = solid ? 'text-velmora-espresso' : 'text-velmora-cream'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${solid ? 'border-b border-velmora-linen bg-velmora-ivory/95 shadow-soft backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10" aria-label="Primary navigation">
        <button type="button" className={`${textClass} rounded-full p-2 transition hover:text-velmora-gold lg:hidden`} onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>

        <Link to="/" className={`font-serif text-3xl font-semibold tracking-luxe ${textClass}`} aria-label="Velmora home">
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={`text-sm font-semibold uppercase tracking-luxe transition hover:text-velmora-gold ${textClass}`}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={`flex items-center gap-3 ${textClass}`}>
          <button type="button" className="rounded-full p-2 transition hover:text-velmora-gold" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" className="relative rounded-full p-2 transition hover:text-velmora-gold" onClick={onCartOpen} aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-velmora-gold text-[0.65rem] font-bold text-velmora-cream">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-espresso/45 backdrop-blur-sm lg:hidden">
          <div className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-velmora-cream p-6 text-velmora-espresso shadow-editorial">
            <div className="flex items-center justify-between border-b border-velmora-linen pb-5">
              <span className="font-serif text-3xl tracking-[0.22em]">VELMORA</span>
              <button type="button" className="rounded-full p-2 text-velmora-espresso hover:text-velmora-gold" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-5 py-10">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="font-serif text-3xl text-velmora-espresso transition hover:text-velmora-gold">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-auto border-t border-velmora-linen pt-5 text-sm leading-6 text-velmora-cocoa">
              Demi-fine jewelry designed for everyday rituals, gifting, and softly lit evenings.
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
