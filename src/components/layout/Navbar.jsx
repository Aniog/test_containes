import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleDrawer, count } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button className="md:hidden p-2 -ml-2 text-brand-ink" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-brand-ink">
          VELMORA
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-ink">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-brand-accent transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full p-2 text-brand-ink hover:text-brand-accent transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button onClick={toggleDrawer} className="relative rounded-full p-2 text-brand-ink hover:text-brand-accent transition-colors">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-brand-line bg-white/95 backdrop-blur-md">
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block rounded-lg px-3 py-2 text-base font-medium text-brand-ink hover:bg-brand-warm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
