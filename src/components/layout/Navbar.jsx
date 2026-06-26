import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS, COMPANY } from '@/data/siteContent'
import { cn } from '@/lib/utils'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'

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
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-200',
        scrolled
          ? 'bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm'
          : 'bg-white border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${COMPANY.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white font-extrabold">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold text-brand">{COMPANY.name}</span>
            <span className="text-[11px] font-medium text-ink-muted">Sourcing Agent in China</span>
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
                      ? 'text-accent'
                      : 'text-ink-muted hover:text-brand',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button as={Link} to="/contact" size="sm">
            Get a Free Sourcing Quote
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'X' : 'Menu'} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-2 sm:px-6">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-md px-3 py-2.5 text-base font-medium',
                        isActive ? 'bg-accent/10 text-accent' : 'text-ink hover:bg-slate-50',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button as={Link} to="/contact" className="mt-4 w-full">
              Get a Free Sourcing Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
