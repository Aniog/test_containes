import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import IconButton from '@/components/ui/IconButton'
import SearchDrawer from '@/components/layout/SearchDrawer'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const NavBar = () => {
  const { itemCount, setIsCartOpen } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solidNav = isScrolled || !isHome || mobileOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-luxury ${solidNav ? 'border-b border-velmora-line bg-velmora-ivory/95 shadow-soft backdrop-blur-xl' : 'bg-transparent'}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link
            to="/"
            className={`font-serif text-2xl tracking-[0.42em] transition-colors ${solidNav ? 'text-velmora-ink' : 'text-white'}`}
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isHashLink = link.to.includes('#')
              const classes = `text-xs uppercase tracking-[0.28em] transition-colors ${solidNav ? 'text-velmora-ink/80 hover:text-velmora-ink' : 'text-white/80 hover:text-white'}`

              return isHashLink ? (
                <a key={link.label} href={link.to} className={classes}>
                  {link.label}
                </a>
              ) : (
                <NavLink key={link.label} to={link.to} className={classes}>
                  {link.label}
                </NavLink>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <IconButton
              className={solidNav ? '!border-velmora-line !bg-white/60 !text-velmora-ink hover:!border-velmora-accent hover:!text-velmora-accent' : ''}
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </IconButton>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${solidNav ? 'border-velmora-line bg-white/60 text-velmora-ink hover:border-velmora-accent hover:text-velmora-accent' : 'border-white/15 bg-white/10 text-white hover:border-velmora-gold hover:text-velmora-gold'}`}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount ? (
                <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-velmora-accent px-1 text-[10px] font-semibold text-velmora-accent-foreground">
                  {itemCount}
                </span>
              ) : null}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${solidNav ? 'border-velmora-line bg-white/60 text-velmora-ink' : 'border-white/15 bg-white/10 text-white'}`}
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${solidNav ? 'border-velmora-line bg-white/60 text-velmora-ink' : 'border-white/15 bg-white/10 text-white'}`}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount ? (
                <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-velmora-accent px-1 text-[10px] font-semibold text-velmora-accent-foreground">
                  {itemCount}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${solidNav ? 'border-velmora-line bg-white/60 text-velmora-ink' : 'border-white/15 bg-white/10 text-white'}`}
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-velmora-line bg-velmora-ivory transition-[max-height] duration-300 ease-luxury md:hidden ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="space-y-2 px-5 py-5 sm:px-8">
            {navLinks.map((link) => {
              const isHashLink = link.to.includes('#')
              const content = (
                <span className="block rounded-full px-4 py-3 text-xs uppercase tracking-[0.28em] text-velmora-ink transition-colors hover:bg-white">
                  {link.label}
                </span>
              )

              return isHashLink ? (
                <a key={link.label} href={link.to} onClick={() => setMobileOpen(false)}>
                  {content}
                </a>
              ) : (
                <NavLink key={link.label} to={link.to} onClick={() => setMobileOpen(false)}>
                  {content}
                </NavLink>
              )
            })}
          </div>
        </div>
      </header>

      <SearchDrawer open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

export default NavBar
