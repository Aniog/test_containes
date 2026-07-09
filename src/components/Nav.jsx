import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useScrollHeader } from '@/hooks/useScrollHeader'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export function Nav() {
  const scrolled = useScrollHeader(40)
  const { setIsOpen, count } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || !isHome
            ? 'bg-velmora-bg/95 backdrop-blur-md border-b border-velmora-border'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} className={scrolled || !isHome ? 'text-velmora-text' : 'text-velmora-dark-text'} />
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs font-sans uppercase tracking-widest transition-colors hover:text-velmora-accent ${
                    scrolled || !isHome ? 'text-velmora-text' : 'text-velmora-dark-text'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-widest-plus uppercase transition-colors ${
                scrolled || !isHome ? 'text-velmora-text' : 'text-velmora-dark-text'
              }`}
            >
              Velmora
            </Link>

            <div className="flex items-center gap-3 md:gap-5">
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-2 transition-colors hover:text-velmora-accent ${
                  scrolled || !isHome ? 'text-velmora-text' : 'text-velmora-dark-text'
                }`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={`relative p-2 transition-colors hover:text-velmora-accent ${
                  scrolled || !isHome ? 'text-velmora-text' : 'text-velmora-dark-text'
                }`}
                aria-label="Open cart"
              >
                <ShoppingBag size={20} />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-velmora-accent px-1 text-[9px] font-sans font-semibold text-white">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-bg">
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-serif text-2xl tracking-widest-plus uppercase text-velmora-text">Velmora</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={24} className="text-velmora-text" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl uppercase tracking-widest text-velmora-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-bg/98 flex items-start justify-center pt-24 px-5">
          <div className="w-full max-w-2xl">
            <div className="flex items-center border-b border-velmora-border-strong pb-3">
              <Search size={22} className="text-velmora-muted mr-3" />
              <input
                autoFocus
                type="text"
                placeholder="Search jewelry..."
                className="flex-1 bg-transparent font-sans text-lg text-velmora-text placeholder:text-velmora-muted outline-none"
              />
              <button onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X size={22} className="text-velmora-muted hover:text-velmora-text" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
