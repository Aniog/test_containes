import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, Ship, Box, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/cases' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 overflow-x-hidden">
      {/* Top Bar Navigation */}
      <div className="bg-slate-950 text-slate-300 py-2 border-b border-slate-800 text-xs hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          <div className="flex space-x-6">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-slate-500" /> Guangzhou, China</span>
            <span className="flex items-center"><Phone className="w-3 h-3 mr-2 text-slate-500" /> +86 138-xxxx-xxxx</span>
            <span className="flex items-center"><Mail className="w-3 h-3 mr-2 text-slate-500" /> info@ssourcingchina.com</span>
          </div>
          <div className="flex space-x-4">
            <span className="flex items-center"><ShieldCheck className="w-3 h-3 mr-1 text-slate-500" /> Verified Factories</span>
            <span className="flex items-center"><Ship className="w-3 h-3 mr-1 text-slate-500" /> Fast Shipping</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-1.5 rounded flex items-center justify-center">
                <Box className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                SSourcing<span className="text-blue-600">China</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-sm font-medium px-6">
                  Get a Quote
                </Button>
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-slate-900 hover:bg-slate-100">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l">
                  <SheetHeader className="mb-8">
                    <SheetTitle className="text-left flex items-center space-x-2">
                      <div className="bg-blue-600 text-white p-1.5 rounded flex items-center justify-center">
                        <Box className="w-5 h-5" />
                      </div>
                      <span>SSourcingChina</span>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`text-lg font-medium px-4 py-2 rounded-md ${
                          location.pathname === link.path
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                    <Link to="/contact" className="mt-4 px-4">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                        Get a Free Quote
                      </Button>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full bg-slate-50/50">
        <div className="mx-auto w-full">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6 text-white">
                 <div className="bg-blue-600 text-white p-1.5 rounded flex items-center justify-center">
                  <Box className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  SSourcing<span className="text-blue-600">China</span>
                </span>
              </Link>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Your reliable sourcing agent in China. We help global buyers find verified suppliers, manage production, perform quality control, and arrange global shipping.
              </p>
              <div className="flex space-x-4">
                 {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer" />
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer" />
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Product Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Supplier Verification</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Sample Consolidation</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Shipping Logistics</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Amazon FBA Prep</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products We Source</Link></li>
                <li><Link to="/cases" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Sourcing Blog</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" />
                  <span>Suite 1205, Business Tower, Yuexiu District, Guangzhou, China</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                  <span>+86 138-xxxx-xxxx</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                  <span>info@ssourcingchina.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} SSourcingChina. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
