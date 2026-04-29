import { useState } from 'react'
import { Menu, X, Sun } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = ['首页', '功能', '关于我们', '定价', '联系']

  return (
    <nav className="bg-yellow-400 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sun className="w-7 h-7 text-yellow-900" />
            <span className="text-yellow-900 font-bold text-xl tracking-tight">阳光品牌</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-yellow-900 font-medium hover:text-yellow-700 transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-yellow-900 font-semibold text-sm px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors">
              登录
            </button>
            <button className="bg-yellow-900 text-yellow-50 font-semibold text-sm px-5 py-2 rounded-full hover:bg-yellow-800 transition-colors shadow">
              免费开始
            </button>
          </div>

          <button
            className="md:hidden text-yellow-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-yellow-300 px-4 pb-4 pt-2 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-yellow-900 font-medium text-sm py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="bg-yellow-900 text-yellow-50 font-semibold text-sm px-5 py-2 rounded-full mt-2">
            免费开始
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
