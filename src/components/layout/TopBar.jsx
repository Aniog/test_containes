import { Bell, Search } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/': 'Dashboard',
  '/celebrities': 'My Celebrities',
  '/create': 'Create Celebrity',
  '/content': 'Content Hub',
}

export default function TopBar() {
  const location = useLocation()
  const basePath = '/' + location.pathname.split('/')[1]
  const title = pageTitles[basePath] || 'VirtuStar'

  return (
    <header className="h-16 bg-[#0d0d18] border-b border-[#2a2a3e] flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search celebrities..."
            className="bg-[#1a1a2e] border border-[#2a2a3e] text-slate-300 placeholder:text-slate-600 rounded-lg pl-9 pr-4 py-2 text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 outline-none w-56 transition-all"
          />
        </div>
        <button className="relative w-9 h-9 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e] flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-violet-500/50 transition-all">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full"></span>
        </button>
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-violet-500/20">
          VS
        </div>
      </div>
    </header>
  )
}
