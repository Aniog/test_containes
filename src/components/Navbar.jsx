import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Hammer } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-slate-800 transition-colors">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">ARTITECT<span className="text-slate-500 font-light ml-1 uppercase">Machinery</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/#contact"
              className="bg-slate-900 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-slate-800 transition-all uppercase tracking-wider"
            >
              Inquiry
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-slate-200 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/#contact"
            className="block w-full text-center bg-slate-900 text-white px-3 py-3 rounded-md text-base font-semibold hover:bg-slate-800"
            onClick={() => setIsOpen(false)}
          >
            Inquiry
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
