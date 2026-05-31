import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { Menu, X } from 'lucide-react'

export default function Layout({ selectedKingdom, onSelectKingdom }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#09080e]">
      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <Sidebar selectedKingdom={selectedKingdom} onSelectKingdom={onSelectKingdom} />
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="relative z-50 w-64">
            <Sidebar selectedKingdom={selectedKingdom} onSelectKingdom={onSelectKingdom} />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <div className="md:hidden flex items-center gap-3 p-4 border-b border-[#2e2650] bg-[#09080e]">
          <button
            onClick={() => setMobileOpen(true)}
            className="text-[#9890b8] hover:text-[#f0ecff]"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-[#f0b830] font-bold">Realm Forge</span>
        </div>

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
