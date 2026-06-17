import { useState } from 'react'
import { Menu, X, ShoppingCart, Search } from 'lucide-react'

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '产品', href: '#products' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="text-[#1E3A5F] font-bold text-xl">OfficeHub</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-orange-500 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-500 hover:text-orange-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-slate-500 hover:text-orange-500 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors text-sm"
            >
              立即咨询
            </a>
          </div>

          <button
            className="md:hidden text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-700 hover:text-orange-500 font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            立即咨询
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
