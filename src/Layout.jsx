import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-slate-900 font-sans">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#d4af37]" /> +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#d4af37]" /> contact@artitect.com
            </span>
          </div>
          <div className="flex gap-4">
            <Facebook className="w-4 h-4 hover:text-[#d4af37] cursor-pointer" />
            <Instagram className="w-4 h-4 hover:text-[#d4af37] cursor-pointer" />
            <Linkedin className="w-4 h-4 hover:text-[#d4af37] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-black tracking-tight text-slate-900">
              ARTITECT<span className="text-[#d4af37]">.</span>
              <span className="text-xs font-sans uppercase tracking-[0.2em] font-light block -mt-1 ml-1 text-slate-500">Machinery</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#d4af37] ${
                    location.pathname === link.path ? 'text-[#d4af37]' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="hidden md:block bg-slate-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-all">
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 py-4 px-4 absolute w-full shadow-lg">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-lg font-medium block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button className="w-full bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-medium">
                  Get Quote
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-serif font-black tracking-tight mb-6 block">
                ARTITECT<span className="text-[#d4af37]">.</span>
              </span>
              <p className="text-slate-400 text-sm leading-relaxed">
                Precision-engineered folding machines for the modern industrial landscape. 
                Setting the standard in metalwork excellence since 1994.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-6 text-[#d4af37]">Products</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>Double Folding Machines</li>
                <li>Hydraulic Folders</li>
                <li>Manual Sheet Metal Folders</li>
                <li>CNC Folding Systems</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6 text-[#d4af37]">Company</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Support</li>
                <li>Training</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6 text-[#d4af37]">Newsletter</h4>
              <p className="text-slate-400 text-sm mb-4">Subscribe for technical updates and machinery news.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 border-none px-4 py-2 text-sm rounded-l-md w-full focus:ring-1 focus:ring-[#d4af37]"
                />
                <button className="bg-[#d4af37] text-slate-900 px-4 py-2 rounded-r-md text-sm font-bold">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2026 ARTITECT MACHINERY CO. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
