import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header
      className={
        'fixed top-0 inset-x-0 z-50 transition-all duration-500 ' +
        (scrolled
          ? 'bg-paper/95 backdrop-blur border-b border-ink/10'
          : 'bg-transparent')
      }
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-ink flex items-center justify-center">
            <span className="font-display text-ink text-xl leading-none">A</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-ink text-lg tracking-wide">ARTITECT</div>
            <div className="text-[10px] tracking-[0.3em] text-steel uppercase">Machinery</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                'text-sm tracking-widest uppercase transition-colors ' +
                (isActive ? 'text-ember' : 'text-ink hover:text-ember')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-ink text-paper text-xs tracking-widest uppercase hover:bg-ember transition-colors duration-300"
        >
          Request Quote
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-ink/10">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  'text-sm tracking-widest uppercase ' +
                  (isActive ? 'text-ember' : 'text-ink')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 bg-ink text-paper text-xs tracking-widest uppercase"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
