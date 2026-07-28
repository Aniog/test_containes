import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
    <div className="min-h-screen bg-[#F8FAFC]">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-[#E2E8F0] z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0F2942] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="font-semibold text-[#0F2942] text-lg">SSourcing China</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${isActive(link.href) ? 'text-[#0F2942]' : 'text-[#475569] hover:text-[#0F2942]'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button>Get a Free Quote</Button>
            </Link>
          </div>

          <button
            className="md:hidden text-[#475569]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E2E8F0] bg-white px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium py-1 ${isActive(link.href) ? 'text-[#0F2942]' : 'text-[#475569]'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-2">Get a Free Quote</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16">
        {children}
      </div>

      <footer className="bg-[#0F2942] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-[#0F2942] font-bold text-sm">SS</span>
                </div>
                <span className="font-semibold text-lg">SSourcing China</span>
              </div>
              <p className="text-sm text-[#94A3B8]">Professional sourcing services for global buyers since 2015.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="flex flex-col gap-2 text-sm text-[#94A3B8]">
                <Link to="/about" className="hover:text-white">About Us</Link>
                <Link to="/contact" className="hover:text-white">Contact</Link>
                <Link to="/blog" className="hover:text-white">Blog</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="flex flex-col gap-2 text-sm text-[#94A3B8]">
                <Link to="/services" className="hover:text-white">Supplier Sourcing</Link>
                <Link to="/services" className="hover:text-white">Factory Verification</Link>
                <Link to="/services" className="hover:text-white">Quality Control</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="flex flex-col gap-2 text-sm text-[#94A3B8]">
                <p>Shanghai, China</p>
                <p>info@ssourcingchina.com</p>
                <p>+86 21 5888 9999</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[#1E3A5F] text-sm text-[#94A3B8]">
            © 2026 SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout