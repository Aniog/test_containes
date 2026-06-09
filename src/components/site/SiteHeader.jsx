import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button, { buttonClassName } from '@/components/ui/Button'
import { navigationItems } from '@/content/siteContent'
import { cn } from '@/lib/utils'

const navLinkClassName = ({ isActive }) =>
  cn(
    'text-sm font-medium transition-colors hover:text-blue-700',
    isActive ? 'text-blue-700' : 'text-slate-700',
  )

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
            SS
          </div>
          <div>
            <p className="text-base font-semibold text-slate-950">SSourcing China</p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              China Sourcing Agent
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className={buttonClassName({ size: 'md' })}>
            Get a Free Sourcing Quote
          </Link>
        </div>

        <Button
          className="lg:hidden"
          variant="ghost"
          size="md"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium',
                    isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100',
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className={buttonClassName({ className: 'mt-2 w-full', size: 'md' })}
              onClick={() => setIsOpen(false)}
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
