import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
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
        'sticky top-0 z-40 w-full transition-all duration-200',
        scrolled
          ? 'bg-white/95 backdrop-blur border-b border-brand-line shadow-sm'
          : 'bg-white border-b border-transparent',
      )}
    >
      <div className="container-page">
        <div className="flex h-16 md:h-20 items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="SSourcing China home"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-md bg-brand-ink text-white font-extrabold text-sm tracking-wide">
              SS
            </div>
            <div className="leading-none">
              <p className="text-base md:text-lg font-bold text-brand-ink tracking-tight">
                SSourcing
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-brand-muted mt-0.5">
                China
              </p>
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
                    isActive
                      ? 'text-brand-ink'
                      : 'text-brand-muted hover:text-brand-ink',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand-accent text-white font-semibold text-sm hover:bg-brand-accent-2 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-brand-ink hover:bg-brand-mist"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-brand-line bg-white">
            <nav className="py-4 flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'py-3 px-2 text-sm font-medium border-b border-brand-line last:border-0',
                      isActive ? 'text-brand-ink' : 'text-brand-muted',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand-accent text-white font-semibold text-sm hover:bg-brand-accent-2"
              >
                Get a Free Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}