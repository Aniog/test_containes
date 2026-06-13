import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/products', label: 'Products' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#0A2540] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">SS</span>
            </div>
            <span className="font-semibold text-xl text-[#0A2540]">SSourcing China</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-[#0A2540]'
                    : 'text-gray-600 hover:text-[#0A2540]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-6 bg-[#0A2540] text-white text-sm font-medium rounded hover:bg-[#1E40AF] transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    isActive(link.href) ? 'text-[#0A2540]' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center h-12 px-6 bg-[#0A2540] text-white text-sm font-medium rounded mt-2"
              >
                Get a Free Sourcing Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header