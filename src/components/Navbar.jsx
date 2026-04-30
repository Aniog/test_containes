import { useState } from 'react'
import { Search, Bell, Menu, X, Dice5 } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Dice5 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">棋聚</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {['发现', '游戏库', '活动', '社区'].map((item) => (
              <a key={item} href="#" className="text-sm text-gray-500 hover:text-indigo-500 transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center ml-1">
              <span className="text-xs font-bold text-indigo-600">李</span>
            </div>
            <button className="md:hidden w-8 h-8 flex items-center justify-center text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-3">
          {['发现', '游戏库', '活动', '社区'].map((item) => (
            <a key={item} href="#" className="text-sm text-gray-600 font-medium py-1">{item}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
