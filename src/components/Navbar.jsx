import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

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

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0A2540] rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">SS</span>
          </div>
          <span className="font-semibold text-xl text-[#0A2540]">SSourcing China</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-[#0A2540]'
                  : 'text-[#475569] hover:text-[#0A2540]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild variant="default" size="default">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium py-1 ${
                  isActive(link.href)
                    ? 'text-[#0A2540]'
                    : 'text-[#475569]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" size="default" className="mt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get a Free Sourcing Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
