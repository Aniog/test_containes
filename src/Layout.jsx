import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
              SSourcing<span className="text-blue-600">China</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors hover:text-blue-600 ${
                  location.pathname === item.href ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white absolute top-16 left-0 right-0 py-4 shadow-lg">
            <nav className="flex flex-col space-y-4 px-4 font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-2 py-1 transition-colors hover:text-blue-600 ${
                    location.pathname === item.href ? 'text-blue-600' : 'text-slate-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 pt-2">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Free Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 md:py-16 text-slate-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="md:col-span-1 border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold text-white tracking-tight">SSourcing<span className="text-blue-500">China</span></span>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Your reliable on-the-ground partner in China. We help global buyers find verified suppliers, manage quality control, and coordinate seamless shipping.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services#supplier-verification" className="hover:text-white transition-colors flex items-center group"><ChevronRight className="h-3 w-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"/> Supplier Verification</Link></li>
                <li><Link to="/services#product-sourcing" className="hover:text-white transition-colors flex items-center group"><ChevronRight className="h-3 w-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"/> Product Sourcing</Link></li>
                <li><Link to="/services#quality-control" className="hover:text-white transition-colors flex items-center group"><ChevronRight className="h-3 w-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"/> Quality Control</Link></li>
                <li><Link to="/services#production-monitoring" className="hover:text-white transition-colors flex items-center group"><ChevronRight className="h-3 w-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"/> Production Monitoring</Link></li>
                <li><Link to="/services#shipping-logistics" className="hover:text-white transition-colors flex items-center group"><ChevronRight className="h-3 w-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"/> Shipping & Logistics</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-slate-400">Email:</span>
                  <a href="mailto:info@ssourcingchina.com" className="ml-2 hover:text-white transition-colors">info@ssourcingchina.com</a>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400">HQ:</span>
                  <span className="ml-2">Shenzhen, China</span>
                </li>
             </ul>
             <div className="mt-6">
                <Button asChild variant="outline" className="w-full bg-transparent border-slate-700 text-white hover:bg-slate-800 hover:text-white">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
             </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;