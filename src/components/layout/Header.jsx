import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
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
    <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0A2540] rounded flex items-center justify-center">
              <span className="text-white font-semibold text-sm">SS</span>
            </div>
            <span className="font-semibold text-xl text-[#0A2540]">SSourcing China</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-[#0A2540] font-medium'
                    : 'text-[#64748B] hover:text-[#0A2540]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
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
                  className={`text-sm py-2 ${
                    isActive(link.href) ? 'text-[#0A2540] font-medium' : 'text-[#64748B]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get a Free Sourcing Quote
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header