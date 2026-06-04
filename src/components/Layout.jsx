import { NavLink, Outlet } from 'react-router-dom'
import { Wind, PawPrint, Camera } from 'lucide-react'

const navItems = [
  { to: '/', label: 'The Great Migration', icon: Wind },
  { to: '/archive', label: 'Species Archive', icon: PawPrint },
  { to: '/gallery', label: 'Dust & Light', icon: Camera },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-savanna-cream font-serif text-savanna-earth">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-savanna-cream/80 border-b border-savanna-sand/50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink
            to="/"
            className="font-display text-2xl font-bold tracking-tight text-savanna-earth hover:text-earth-700 transition-colors"
          >
            Serengeti Pulse
          </NavLink>
          <ul className="flex gap-8">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-2 font-serif text-sm tracking-widest uppercase transition-all duration-300 ${
                      isActive
                        ? 'text-earth-600 border-b-2 border-earth-500 pb-1'
                        : 'text-savanna-dust hover:text-savanna-earth'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-savanna-sand/50 bg-savanna-cream py-12 text-center">
        <p className="text-savanna-dust text-sm tracking-widest uppercase">
          Serengeti Pulse
        </p>
        <p className="text-savanna-dust/60 text-xs mt-2 font-serif italic">
          A portrait of the endless prairie
        </p>
      </footer>
    </div>
  )
}