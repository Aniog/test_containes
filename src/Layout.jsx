import { NavLink, Outlet } from 'react-router-dom'
import { Compass, BookOpen, Sun } from 'lucide-react'

const navItems = [
  { to: '/', label: 'The Great Migration', icon: Compass },
  { to: '/species', label: 'Species Archive', icon: BookOpen },
  { to: '/dust-light', label: 'Dust & Light', icon: Sun },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-parchment font-body">
      <header className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-dust/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <NavLink to="/" className="group flex items-center gap-2">
              <span className="font-serif text-xl md:text-2xl font-bold text-dark-earth tracking-wide group-hover:text-burnt-orange transition-colors">
                Serengeti Pulse
              </span>
            </NavLink>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-2 font-serif text-sm tracking-wider uppercase transition-colors ${
                      isActive
                        ? 'text-burnt-orange'
                        : 'text-clay hover:text-burnt-orange'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <nav className="flex md:hidden items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex flex-col items-center gap-1 text-xs tracking-wider uppercase transition-colors ${
                      isActive
                        ? 'text-burnt-orange'
                        : 'text-clay hover:text-burnt-orange'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span className="hidden xs:inline">
                    {item.to === '/' ? 'Migration' : item.to === '/species' ? 'Species' : 'Dust & Light'}
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>

      <footer className="bg-dark-earth text-warm-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 tracking-wide">
            Serengeti Pulse
          </h3>
          <p className="text-dust text-sm md:text-base max-w-md mx-auto leading-relaxed">
            A tribute to the endless plains, the creatures that roam them, and the light that shapes them.
          </p>
          <div className="mt-8 pt-6 border-t border-clay/30">
            <p className="text-xs text-dust tracking-wider uppercase">
              &copy; {new Date().getFullYear()} Serengeti Pulse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}