import React from 'react'
import { Outlet } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Header */}
      <div className="bg-brand-900 text-brand-500 py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@artitectmachinery.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-white" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-white" />
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-700 flex items-center justify-center font-bold text-white text-2xl">A</div>
              <span className="text-2xl font-bold tracking-tight text-brand-900">ARTITECT <span className="font-light text-brand-600">MACHINERY</span></span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brand-800 font-medium hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/contact"
                className="bg-accent text-white px-6 py-2 rounded-sm font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-200"
              >
                Inquiry Now
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              className="md:hidden text-brand-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-800 text-white p-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium border-b border-brand-700 pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/contact"
                className="bg-accent text-white text-center px-6 py-2 rounded-sm font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Inquiry Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-700 flex items-center justify-center font-bold text-white text-xl">A</div>
                <span className="text-xl font-bold tracking-tight">ARTITECT <span className="font-light text-brand-500">MACHINERY</span></span>
              </div>
              <p className="text-brand-500 leading-relaxed mb-6">
                Leading the industry in precision double folding machines and sheet metal folding technology. Quality and elegance in every fold.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-brand-500 border-b border-brand-800 pb-2">Products</h4>
              <ul className="space-y-4 text-brand-500">
                <li><a href="#" className="hover:text-white transition-colors">Double Folding Machine</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sheet Metal Folder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CNC folding systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automation Solutions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-brand-500 border-b border-brand-800 pb-2">Quick Links</h4>
              <ul className="space-y-4 text-brand-500">
                <li><a href="#" className="hover:text-white transition-colors">About Our Brand</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service & Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resource Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-brand-500 border-b border-brand-800 pb-2">Global Presence</h4>
              <div className="space-y-4 text-brand-500">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>123 Industrial Ave, Tech City, Germany</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@artitectmachinery.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center text-brand-500 text-sm">
            <p>&copy; 2026 ARTITECT MACHINERY. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
