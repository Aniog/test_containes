import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Mail, Phone, MapPin, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/sonner";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@ssourcingchina.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+86 123 4567 8900</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
            <div className="flex items-center ml-2 border-l border-slate-700 pl-4">
              <Globe className="h-4 w-4 mr-1" />
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <nav className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="text-2xl font-bold font-['Montserrat'] text-blue-700 tracking-tight">
                S<span className="text-slate-900">Sourcing</span>
              </span>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors",
                  location.pathname === item.href 
                    ? "text-blue-600" 
                    : "text-slate-700 hover:text-blue-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </nav>
        
        {/* Mobile menu */}
        <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10 shadow-xl">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold font-['Montserrat'] text-blue-700">
                  S<span className="text-slate-900">Sourcing</span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-100">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-slate-50",
                        location.pathname === item.href ? "text-blue-600 bg-blue-50" : "text-slate-900"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Free Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6 flex items-center">
                <span className="text-2xl font-bold font-['Montserrat'] text-white">
                  SSourcing<span className="text-blue-500">.</span>
                </span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Your trusted partner in China. We help global buyers find reliable suppliers, ensure product quality, and manage the entire supply chain from factory to your door.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 font-['Montserrat']">Our Services</h3>
              <ul className="space-y-3 pb-2">
                <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-blue-500" /> Supplier Sourcing</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-blue-500" /> Factory Audit</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-blue-500" /> Quality Control & Inspection</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-blue-500" /> Amazon FBA Prep</Link></li>
                <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-blue-500" /> Logistics & Shipping</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 font-['Montserrat']">Quick Links</h3>
              <ul className="space-y-3 pb-2">
                <li><Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-blue-500" /> About Us</Link></li>
                <li><Link to="/how-it-works" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-blue-500" /> How It Works</Link></li>
                <li><Link to="/pricing" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-blue-500" /> Pricing</Link></li>
                <li><Link to="/blog" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-blue-500" /> Blog & Resources</Link></li>
                <li><Link to="/faq" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-blue-500" /> FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 font-['Montserrat']">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-400">123 Business Center, Tianhe District, Guangzhou, Guangdong, China</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-slate-400">+86 123 4567 8900</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-slate-400">info@ssourcingchina.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
