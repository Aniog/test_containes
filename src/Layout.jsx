import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Products We Source", href: "/products" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-200 py-2 px-4 md:px-8 text-sm hidden md:flex justify-between items-center">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Guangzhou, China</span>
          <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@ssourcingchina.com</span>
          <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +86 123 456 7890</span>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> English</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
                <span className="font-bold text-2xl tracking-tight text-slate-900">SSourcing China</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:ml-6 md:flex md:space-x-1 lg:space-x-4 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="ml-4 bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-3">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">S</div>
                <span className="font-bold text-xl tracking-tight text-white">SSourcing China</span>
              </Link>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Your reliable China-based sourcing agent. We help global buyers find the right suppliers, verify quality, and manage logistics from start to finish.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-sm hover:text-blue-400 transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="text-sm hover:text-blue-400 transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="text-sm hover:text-blue-400 transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="text-sm hover:text-blue-400 transition-colors">Shipping & Logistics</Link></li>
                <li><Link to="/services" className="text-sm hover:text-blue-400 transition-colors">Private Label (OEM/ODM)</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/how-it-works" className="text-sm hover:text-blue-400 transition-colors">How It Works</Link></li>
                <li><Link to="/products" className="text-sm hover:text-blue-400 transition-colors">Products We Source</Link></li>
                <li><Link to="/case-studies" className="text-sm hover:text-blue-400 transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="text-sm hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 shrink-0" />
                  <span>Room 1205, Business Tower, Tianhe District, Guangzhou, 510000, China</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                  <span>+86 123 456 7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                  <a href="mailto:info@ssourcingchina.com" className="hover:text-blue-400 transition-colors">info@ssourcingchina.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
