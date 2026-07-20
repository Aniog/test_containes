import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?focus=collections' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { count, setCartOpen } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || menuOpen || location.pathname !== '/'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${solid ? 'border-b border-velmora-mist/70 bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur' : 'text-velmora-ivory'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8 lg:px-12" aria-label="Main navigation">
        <div className="flex items-center gap-3 lg:hidden">
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="p-2" aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <Link to="/" className="font-serif text-2xl font-semibold uppercase tracking-[0.28em] md:text-3xl">VELMORA</Link>
        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.href} className="text-xs font-semibold uppercase tracking-[0.18em] transition hover:text-velmora-champagne">
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="hidden p-2 transition hover:text-velmora-champagne sm:block" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => setCartOpen(true)} className="relative p-2 transition hover:text-velmora-champagne" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-espresso">{count}</span>}
          </button>
        </div>
      </nav>
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} border-t border-velmora-mist bg-velmora-ivory px-5 py-5 text-velmora-espresso`}>
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.label} to={link.href} onClick={() => setMenuOpen(false)} className="text-sm font-semibold uppercase tracking-[0.18em]">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
