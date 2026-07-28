import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/products', label: 'Products' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#0F2942] rounded flex items-center justify-center">
                <span className="text-white font-semibold text-lg">SS</span>
              </div>
              <span className="font-semibold text-xl text-[#0F2942]">SSourcing China</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href) ? 'text-[#0F2942]' : 'text-[#64748B] hover:text-[#0F2942]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3A8A7B] text-white text-sm font-medium rounded-lg hover:bg-[#2F6F63] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Get a Free Quote
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-1 ${isActive(link.href) ? 'text-[#0F2942]' : 'text-[#64748B]'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#3A8A7B] text-white text-sm font-medium rounded-lg mt-2"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-20">{children}</div>

      <footer className="bg-[#0F2942] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-[#0F2942] font-semibold">SS</span>
                </div>
                <span className="font-semibold text-lg">SSourcing China</span>
              </div>
              <p className="text-sm text-gray-400">Connecting global buyers with reliable Chinese suppliers since 2015.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link>
                <Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link>
                <Link to="/services" className="hover:text-white transition-colors">Quality Control</Link>
                <Link to="/services" className="hover:text-white transition-colors">Logistics Support</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
                <a href="tel:+862162345678" className="hover:text-white transition-colors">+86 21 6234 5678</a>
                <p>Shanghai, China</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}