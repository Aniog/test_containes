import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/products', label: 'Products' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-semibold text-lg tracking-tight">SS</span>
            </div>
            <div>
              <div className="font-semibold text-xl tracking-tight text-slate-900">SSourcing China</div>
              <div className="text-[10px] text-slate-500 -mt-1">SOURCING AGENT</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors ${isActive(link.href) ? 'text-slate-900 font-medium' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild variant="default" size="sm">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-1 ${isActive(link.href) ? 'text-slate-900 font-medium' : 'text-slate-600'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="pt-2">
              <Button className="w-full">Get a Free Sourcing Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
