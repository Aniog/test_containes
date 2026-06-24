import { NavLink, Link, useLocation } from 'react-router-dom'
import { Microscope, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Observation' },
  { to: '/specimens', label: 'Specimens' },
  { to: '/gallery', label: 'Slide Gallery' },
  { to: '/contact', label: 'Lab Notes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      <nav
        className={`flex items-center justify-between rounded-full border border-white/30 backdrop-blur-md transition-all
          ${scrolled ? 'bg-white/55 shadow-[0_10px_40px_rgba(26,26,26,0.10)]' : 'bg-white/30 shadow-[0_8px_32px_rgba(26,26,26,0.06)]'}
          px-5 sm:px-7 py-3`}
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-9 h-9 rounded-full border border-ink/20 bg-parchment">
            <Microscope className="w-4 h-4 text-ink" strokeWidth={1.4} />
          </span>
          <div className="leading-tight">
            <div className="font-serif text-ink text-lg italic">MicroCosmos</div>
            <div className="small-caps text-graphite -mt-0.5">est. mcmlxii</div>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition rounded-full
                  ${isActive ? 'text-ink' : 'text-charcoal hover:text-ink'}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{l.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full bg-ink/8 border border-ink/15"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Open menu"
          className="md:hidden grid place-items-center w-9 h-9 rounded-full border border-ink/15 bg-white/50"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-2 rounded-3xl border border-white/30 bg-white/70 backdrop-blur-md p-3 shadow-[0_10px_40px_rgba(26,26,26,0.10)]"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-2xl text-charcoal hover:bg-ink/5
                       ${isActive ? 'bg-ink/5 text-ink' : ''}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
