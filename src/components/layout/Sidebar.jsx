import { NavLink } from 'react-router-dom'
import {
  Crown,
  LayoutDashboard,
  Landmark,
  Coins,
  Sword,
  Handshake,
  Shield,
} from 'lucide-react'

const getSchemaData = (entity) => entity?.data ?? {}

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  { to: '/kingdoms', icon: Crown, label: 'Kingdoms' },
  { to: '/government', icon: Landmark, label: 'Government' },
  { to: '/economy', icon: Coins, label: 'Economy' },
  { to: '/military', icon: Sword, label: 'Military' },
  { to: '/diplomacy', icon: Handshake, label: 'Diplomacy' },
]

export default function Sidebar({ selectedKingdom, onSelectKingdom }) {
  return (
    <aside className="w-64 bg-[#09080e] border-r border-[#2e2650] flex flex-col min-h-screen flex-shrink-0" style={{background: 'linear-gradient(180deg, #0e0b1a 0%, #09080e 100%)'}}>
      {/* Logo */}
      <div className="p-6 border-b border-[#2e2650]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#f0b830]/20 rounded-lg flex items-center justify-center ring-1 ring-[#f0b830]/30">
            <Shield className="w-5 h-5 text-[#f0b830]" />
          </div>
          <div>
            <h1 className="text-[#f0ecff] font-bold text-base leading-tight" style={{fontFamily: "'Cinzel', serif"}}>Realm Forge</h1>
            <p className="text-[#5a5278] text-xs">Fantasy Kingdom Builder</p>
          </div>
        </div>
      </div>

      {/* Kingdom selector */}
      {selectedKingdom && (() => {
        const kd = getSchemaData(selectedKingdom)
        return (
          <div className="mx-4 mt-4 p-3 bg-[#181230] border border-[#2e2650] rounded-xl">
            <p className="text-xs text-[#9890b8] uppercase tracking-widest mb-1">Active Kingdom</p>
            <div className="flex items-center gap-2">
              <span className="text-lg">{kd.emblem || '⚔️'}</span>
              <div className="min-w-0">
                <p className="text-[#f0b830] font-semibold text-sm truncate">{kd.name}</p>
                <p className="text-[#5a5278] text-xs capitalize">{kd.terrain}</p>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1 mt-2">
        {navItems.map(({ to, icon: Icon, label, exact }) => (
          <NavLink
            key={to}
            to={to}
            end={exact}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 group ${
                isActive
                  ? 'bg-[#181230] text-[#f0b830] border-l-2 border-[#f0b830] pl-[10px]'
                  : 'text-[#9890b8] hover:text-[#f0ecff] hover:bg-[#100e1a]'
              }`
            }
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            <span className="flex-1">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#2e2650]">
        <p className="text-xs text-[#5a5278] text-center">
          May your reign be eternal
        </p>
      </div>
    </aside>
  )
}
