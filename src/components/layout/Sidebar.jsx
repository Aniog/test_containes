import { NavLink, useLocation } from 'react-router-dom'
import { Sparkles, LayoutDashboard, Users, PlusCircle, FileText, Settings, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/celebrities', icon: Users, label: 'My Celebrities' },
  { to: '/create', icon: PlusCircle, label: 'Create New' },
  { to: '/content', icon: FileText, label: 'Content Hub' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#0d0d18] border-r border-[#2a2a3e] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#2a2a3e]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-100 leading-tight">VirtuStar</h1>
            <p className="text-xs text-slate-500">AI Celebrity Studio</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#1a1a2e]'
              )
            }
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#2a2a3e]">
        <div className="bg-gradient-to-r from-violet-600/10 to-cyan-500/10 border border-violet-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-semibold text-violet-300">AI Powered</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">Create unlimited virtual celebrities with AI-driven personalities.</p>
        </div>
      </div>
    </aside>
  )
}
