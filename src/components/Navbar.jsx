import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Microscope, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { to: '/', label: 'Index' },
  { to: '/specimens', label: 'Specimens' },
  { to: '/gallery', label: 'Plate Gallery' },
  { to: '/contact', label: 'Lab Notes' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1200px)]"
    >
      <nav
        className={[
          'flex items-center justify-between gap-6 rounded-2xl px-4 sm:px-6 py-3',
          'backdrop-blur-md border transition-all duration-500',
          scrolled
            ? 'bg-[rgba(242,240,233,0.72)] border-ink/15 shadow-[0_10px_40px_-20px_rgba(26,26,26,0.4)]'
            : 'bg-white/30 border-white/40',
        ].join(' ')}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-ink text-parchment ring-1 ring-ink/20">
            <Microscope size={18} strokeWidth={1.5} />
          </span>
          <span className="leading-none">
            <span className="block font-serif text-ink text-lg tracking-tight">MicroCosmos</span>
            <span className="block text-[10px] font-mono uppercase tracking-[0.28em] text-graphite">Est. MMXXVI</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  [
                    'relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-colors',
                    isActive ? 'text-ink' : 'text-charcoal/80 hover:text-ink',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-ink/8 ring-1 ring-ink/15"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            to="/specimens"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-parchment px-4 py-2 text-sm font-medium hover:bg-charcoal transition-colors"
          >
            Begin Observation
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-ink"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-2 rounded-2xl bg-[rgba(242,240,233,0.92)] backdrop-blur-md border border-ink/10 p-3 shadow-xl"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      [
                        'flex items-center justify-between rounded-xl px-4 py-3 text-sm',
                        isActive ? 'bg-ink/10 text-ink' : 'text-charcoal hover:bg-ink/5',
                      ].join(' ')
                    }
                  >
                    <span>{l.label}</span>
                    <span className="font-mono text-[10px] tracking-widest text-graphite">→</span>
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
