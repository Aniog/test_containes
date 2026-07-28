import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ButtonLink from '@/components/common/ButtonLink'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'How It Works', to: '/how-it-works' },
  { name: 'Products We Source', to: '/products' },
  { name: 'Case Studies', to: '/case-studies' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950 text-white shadow-sm backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-white">
            SS
          </div>
          <div>
            <p className="text-base font-semibold tracking-tight text-white">SSourcing China</p>
            <p className="text-sm text-white/70">China Sourcing Agent for Global Buyers</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-white/75 transition hover:text-white',
                  isActive && 'text-white',
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink to="/contact" variant="light">
            Get a Free Sourcing Quote
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white',
                    isActive && 'bg-white/10 text-white',
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <ButtonLink to="/contact" className="mt-2 text-center" onClick={() => setOpen(false)}>
              Get a Free Sourcing Quote
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  )
}
