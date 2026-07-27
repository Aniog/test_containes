import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Anchor } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '@/data/content'
import { cn } from '@/lib/utils'
import CTAButton from './CTAButton'

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
          ? 'border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80'
          : 'border-transparent bg-white',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Anchor className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">{COMPANY.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-accent'
                      : 'text-foreground/80 hover:text-accent',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CTAButton className="px-5 py-2.5 text-sm" />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-primary lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-3 py-3 text-base font-medium',
                      isActive
                        ? 'bg-muted text-accent'
                        : 'text-foreground hover:bg-muted',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="px-3 py-3">
              <CTAButton className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
