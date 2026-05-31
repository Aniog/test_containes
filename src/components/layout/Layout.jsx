import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { Menu, X } from 'lucide-react'

export default function Layout({ selectedKingdom, onSelectKingdom }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#0d0f1a]">
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
        <div className="md:hidden flex items-center gap-3 p-4 border-b border-[#2a2f52] bg-[#0d0f1a]">
          <button
            onClick={() => setMobileOpen(true)}
            className="text-[#9a95a8] hover:text-[#e8e4d9]"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-[#c9a84c] font-bold">Realm Forge</span>
        </div>

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
