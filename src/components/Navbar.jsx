import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-tight text-white">
                ARTITECT
                <span className="text-blue-500"> MACHINES</span>
              </span>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <a href="#about" className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">
              About
            </a>
            <a href="#products" className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">
              Products
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">
              Contact Us
            </a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors lg:inline-flex items-center">
              Get Quote <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden absolute top-20 left-0 right-0 bg-slate-900 border-b border-slate-800 z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              className="text-slate-300 hover:bg-slate-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#products"
              className="text-slate-300 hover:bg-slate-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:bg-slate-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}