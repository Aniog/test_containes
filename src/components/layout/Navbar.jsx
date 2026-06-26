import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur border-b border-line shadow-sm'
          : 'bg-white border-b border-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-steel text-white font-extrabold text-lg">
            A
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm md:text-base font-extrabold tracking-tight text-ink">
              ARTITECT
            </span>
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-copper">
              MACHINERY
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  isActive
                    ? 'text-steel bg-surface'
                    : 'text-muted hover:text-steel hover:bg-surface'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button to="/contact" variant="accent" className="px-5 py-2.5 text-sm">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-steel hover:bg-surface"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-white">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-3 rounded-md text-base font-medium',
                    isActive ? 'text-steel bg-surface' : 'text-muted'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="accent" className="mt-3 w-full">
              Request a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
