import { useEffect, useRef } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Lenis from 'lenis'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { to: '/', label: 'The Roots' },
  { to: '/micro-forest', label: 'Micro-Forest' },
  { to: '/outlook', label: 'The Outlook' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="min-h-screen bg-canopy-deep text-canopy-mist-light font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-canopy-deep/85 backdrop-blur-sm border-b border-canopy-fog/20">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <NavLink
            to="/"
            className="font-display text-xl font-bold tracking-tight text-canopy-mist-light hover:text-white transition-colors duration-500"
          >
            Ancient Canopy
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-body text-sm uppercase tracking-[0.2em] transition-colors duration-500 ${
                      isActive
                        ? 'text-white border-b border-canopy-lichen'
                        : 'text-canopy-mist hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden text-canopy-mist hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-canopy-deep/95 border-b border-canopy-fog/20 px-6 py-4">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block font-body text-sm uppercase tracking-[0.2em] transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-canopy-mist hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-canopy-fog/20 py-12 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-canopy-stone text-xs uppercase tracking-[0.2em]">
          <span>Ancient Canopy</span>
          <span>The old growth endures</span>
        </div>
      </footer>
    </div>
  )
}