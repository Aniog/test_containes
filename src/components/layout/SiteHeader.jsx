import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/store'

const SiteHeader = ({ onOpenSearch }) => {
  const location = useLocation()
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  const isTransparent = useMemo(
    () => location.pathname === '/' && !isScrolled && !isMenuOpen,
    [isMenuOpen, isScrolled, location.pathname],
  )

  const headerClasses = cn(
    'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe',
    isTransparent
      ? 'bg-transparent text-velmora-pearl'
      : 'border-b border-velmora-sand/70 bg-velmora-pearl/95 text-velmora-ink shadow-soft backdrop-blur-xl',
  )

  const iconButtonClasses = cn(
    'inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300',
    isTransparent
      ? 'border-velmora-pearl/25 bg-velmora-pearl/10 text-velmora-pearl hover:bg-velmora-pearl hover:text-velmora-ink'
      : 'border-velmora-ink/10 bg-velmora-pearl text-velmora-ink hover:border-velmora-gold hover:text-velmora-gold',
  )

  return (
    <>
      <header className={headerClasses}>
        <div className="page-shell flex h-20 items-center justify-between gap-3 md:h-24">
          <div className="flex items-center gap-2 md:w-1/3">
            <button
              type="button"
              className={cn(iconButtonClasses, 'md:hidden')}
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </button>
            <Link
              to="/"
              className="font-heading text-3xl tracking-[0.35em] md:text-[2rem]"
            >
              VELMORA
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex md:w-1/3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs uppercase tracking-[0.35em] transition-colors duration-300 hover:text-velmora-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 md:w-1/3">
            <button
              type="button"
              className={iconButtonClasses}
              aria-label="Search"
              onClick={onOpenSearch}
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className={cn(iconButtonClasses, 'relative')}
              aria-label="Open cart"
              onClick={openCart}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ink">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-50 transition-all duration-300 md:hidden',
          isMenuOpen ? 'visible' : 'invisible pointer-events-none',
        )}
      >
        <button
          type="button"
          className={cn(
            'absolute inset-0 bg-velmora-ink/50 transition-opacity duration-300',
            isMenuOpen ? 'opacity-100' : 'opacity-0',
          )}
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={cn(
            'absolute left-4 right-4 top-4 rounded-[2rem] border border-velmora-sand/70 bg-velmora-pearl p-6 shadow-soft transition-all duration-500 ease-luxe',
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0',
          )}
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="font-heading text-2xl tracking-[0.28em]">VELMORA</span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-ink/10"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="border-b border-velmora-sand/70 pb-4 text-sm uppercase tracking-[0.35em] text-velmora-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default SiteHeader
