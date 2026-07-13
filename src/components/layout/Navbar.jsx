import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Ship } from 'lucide-react'
import { NAV_LINKS } from '@/data/content'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors',
        scrolled
          ? 'border-slate-200 bg-white/95 backdrop-blur'
          : 'border-transparent bg-white',
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-white">
            <Ship className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            SSourcing<span className="text-brand-700"> China</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-brand-700'
                      : 'text-slate-600 hover:text-brand-700',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary text-sm">
            Get a Free Sourcing Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-3 py-2 text-base font-medium',
                      isActive
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-slate-700 hover:bg-slate-50',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2">
              <Link to="/contact" className="btn-primary w-full">
                Get a Free Sourcing Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
