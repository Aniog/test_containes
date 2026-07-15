import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useStore } from '@/context/StoreContext'
import { cn } from '@/lib/utils'

const navigation = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount, openCart } = useStore()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-velmora-sand/70 bg-velmora-cream/95 backdrop-blur-md shadow-velmora-soft'
            : 'bg-transparent',
        )}
      >
        <div className="page-shell flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-velmora-sand/60 bg-velmora-cream/80 text-velmora-ink backdrop-blur"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <Link to="/" className="font-display text-3xl tracking-[0.32em] text-velmora-cream lg:text-4xl" style={{ color: scrolled ? undefined : '#fbf7f1' }}>
            VELMORA
          </Link>

          <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.24em] text-velmora-cream lg:flex" style={{ color: scrolled ? undefined : '#fbf7f1' }}>
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn('transition hover:text-velmora-gold', isActive && 'text-velmora-gold')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className={cn(
                'flex h-11 w-11 items-center justify-center rounded-full border text-velmora-ink transition',
                scrolled
                  ? 'border-velmora-sand bg-velmora-ivory'
                  : 'border-velmora-cream/30 bg-velmora-cream/10 text-velmora-cream backdrop-blur',
              )}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className={cn(
                'relative flex h-11 w-11 items-center justify-center rounded-full border transition',
                scrolled
                  ? 'border-velmora-sand bg-velmora-ivory text-velmora-ink'
                  : 'border-velmora-cream/30 bg-velmora-cream/10 text-velmora-cream backdrop-blur',
              )}
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-cream">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[60] bg-velmora-ink/40 backdrop-blur-sm transition lg:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-[70] w-[85%] max-w-sm border-r border-velmora-sand bg-velmora-ivory p-6 transition lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-3xl tracking-[0.28em]" onClick={() => setMobileOpen(false)}>
            VELMORA
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-velmora-sand text-velmora-ink"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-12 space-y-5">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-velmora-sand/60 pb-5 font-display text-3xl text-velmora-ink"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-velmora-sand bg-velmora-cream p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-taupe">New season</p>
          <h3 className="mt-3 font-display text-3xl text-velmora-ink">Modern heirlooms for daily wear.</h3>
          <Button className="mt-5 w-full" onClick={() => setMobileOpen(false)}>
            Explore bestsellers
          </Button>
        </div>
      </aside>
    </>
  )
}
