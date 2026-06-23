import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Mail, Globe, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="text-blue-600" />
              <span>SSourcing <span className="text-blue-600">China</span></span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
              >
                Free Sourcing Quote
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-slate-700 hover:bg-slate-50 hover:text-blue-600 px-3 py-4 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center bg-blue-600 text-white px-3 py-4 rounded-md text-base font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white flex items-center gap-2">
              <Globe className="text-blue-400" />
              <span>SSourcing China</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your professional sourcing partner in China. We help global businesses navigate the complexities of Chinese manufacturing with transparency, quality, and reliability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Mail size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Phone size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products We Source</Link></li>
              <li><Link to="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li>Product Sourcing</li>
              <li>Factory Audit & Verification</li>
              <li>Quality Control Inspection</li>
              <li>Production Monitoring</li>
              <li>Shipping & Logistics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span>hello@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span>+86 123 4567 8901</span>
              </li>
              <li className="mt-4 p-4 bg-slate-800 rounded-lg text-xs leading-normal">
                Shenzhen Head Office:<br />
                Futian District, Shenzhen, Guangdong, China
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SSourcing China. All Rights Reserved. Professional Sourcing & QC Services.</p>
        </div>
      </div>
    </footer>
  )
}

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
