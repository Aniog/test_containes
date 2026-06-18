import React, { useState, useEffect } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Products', path: '/products' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Footer = () => (
  <footer className="bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-bold text-white">
            SSourcing<span className="text-red-500">China</span>
          </Link>
          <p className="mt-4 text-slate-300 text-sm">
            Your trusted China sourcing agent helping overseas buyers find reliable suppliers, verify factories, and ensure quality.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="/services" className="hover:text-white transition-colors">Supplier Verification</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Production Follow-up</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Shipping & Logistics</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>Email: info@ssourcingchina.com</li>
            <li>Phone: +86 123 4567 8900</li>
            <li>Location: Shenzhen, China</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="text-xl md:text-2xl font-bold text-slate-900">
            SSourcing<span className="text-red-600">China</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  location.pathname === link.path 
                    ? 'text-red-600' 
                    : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-red-600 text-white font-medium text-sm rounded-md hover:bg-red-700 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-base font-medium ${
                  location.pathname === link.path 
                    ? 'text-red-600' 
                    : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center px-5 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China</title>
        <meta name="description" content="SSourcing China - Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout