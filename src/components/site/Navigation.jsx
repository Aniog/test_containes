import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Light pages get a light header; dark pages get a dark header.
  const darkHeader = !scrolled && location.pathname === '/'

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        darkHeader
          ? 'bg-transparent'
          : 'border-b border-line/60 bg-ink/90 backdrop-blur-md supports-[backdrop-filter]:bg-ink/75',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="ARTITECT MACHINERY home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-brass/60 bg-ink-2 text-brass">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M3 20h18" />
              <path d="M5 20V8l7-4 7 4v12" />
              <path d="M9 20v-6h6v6" />
              <path d="M9 12h6" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'text-[15px] font-semibold tracking-[0.18em]',
                darkHeader ? 'text-white' : 'text-white',
              )}
            >
              ARTITECT
            </span>
            <span
              className={cn(
                'mt-0.5 text-[10px] font-medium tracking-[0.32em]',
                darkHeader ? 'text-steel' : 'text-steel',
              )}
            >
              MACHINERY
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'relative text-sm font-medium tracking-wide transition-colors',
                  isActive
                    ? 'text-brass'
                    : 'text-steel hover:text-white',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/contact" className="btn-primary text-xs uppercase tracking-eyebrow">
            Request a quote
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink md:hidden">
          <div className="container-page flex flex-col gap-1 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-3 text-base font-medium',
                    isActive
                      ? 'bg-ink-2 text-brass'
                      : 'text-steel hover:bg-ink-2 hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn-primary mt-4 w-full justify-center"
            >
              Request a quote
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
