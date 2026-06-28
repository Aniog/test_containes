import React from 'react'
import { Menu, X, Settings } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Settings className="w-8 h-8 text-amber-500" />
            <span className="font-bold text-xl tracking-tight uppercase">ARTITECT MACHINERY</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-amber-500 hover:text-amber-400 font-medium transition-colors">Request Quote</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">Products</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">Why Choose Us</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">About</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-amber-500 hover:text-amber-400 hover:bg-slate-700 rounded-md">Request Quote</a>
          </div>
        </div>
      )}
    </header>
  )
}
