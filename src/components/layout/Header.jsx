import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Globe2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white/95 backdrop-blur',
        scrolled ? 'border-b border-hairline shadow-nav' : 'border-b border-transparent'
      )}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-brand-navy text-white flex items-center justify-center">
            <Globe2 className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-brand-navy text-base">SSourcing China</div>
            <div className="text-[11px] text-muted-ink -mt-0.5 hidden sm:block">
              China-based sourcing partner
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-primary' : 'text-ink-soft hover:text-ink'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-primary !py-2.5 !px-4 text-sm">
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-ink"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2.5 rounded-md text-sm font-medium',
                    isActive
                      ? 'bg-primary-soft text-primary'
                      : 'text-ink-soft hover:bg-surface hover:text-ink'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-3 text-sm justify-center">
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
