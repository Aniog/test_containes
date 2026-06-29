import React, { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-cream-50 text-text-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gold-500 flex items-center justify-center">
                <span className="text-navy-900 font-extrabold text-sm md:text-base">AM</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg md:text-xl tracking-tight">ARTITECT</span>
                <span className="text-gold-500 font-light text-lg md:text-xl ml-1">MACHINERY</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-gold-500 transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="ml-4">
                <Button size="sm" className="bg-gold-500 text-navy-900 hover:bg-gold-400 font-semibold">
                  Get a Quote
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/5 bg-navy-800">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <Button className="w-full bg-gold-500 text-navy-900 hover:bg-gold-400 font-semibold">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer id="about" className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
                  <span className="text-navy-900 font-extrabold">AM</span>
                </div>
                <div>
                  <span className="text-white font-bold text-xl">ARTITECT</span>
                  <span className="text-gold-500 font-light text-xl ml-1">MACHINERY</span>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                Precision-engineered sheet metal folding machines built for the modern fabricator. 
                Combining German engineering with innovative design since 2005.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/50 hover:text-gold-500 text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li>info@artitect-machinery.com</li>
                <li>+1 (555) 123-4567</li>
                <li>246 Industrial Blvd, Suite 200<br />Chicago, IL 60601</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-gold-500 text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/30 hover:text-gold-500 text-xs transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}