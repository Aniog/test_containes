import { Link, Outlet } from "react-router-dom";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Products We Source", path: "/products-we-source" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-white">
      {/* Top Bar */}
      <div className="bg-stone-900 text-stone-200 py-2 px-4 sm:px-6 lg:px-8 text-sm flex justify-between items-center hidden sm:flex">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> +86 123 456 7890
          </span>
          <span>info@ssourcingchina.com</span>
        </div>
        <div>
          <span>Your Reliable Sourcing Partner in China</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-700 tracking-tight">
                SSourcing China<span className="text-orange-500">.</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-stone-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded bg-blue-700 text-white hover:bg-blue-800 transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-blue-700 hover:bg-stone-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-700 text-white hover:bg-blue-800 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1 border-r-0 md:border-r border-stone-800 pr-0 md:pr-8">
              <Link to="/" className="text-2xl font-bold text-white tracking-tight block mb-4">
                SSourcing China<span className="text-orange-500">.</span>
              </Link>
              <p className="text-sm text-stone-400 mb-6 line-clamp-4">
                Your dedicated sourcing agent in China. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">Supplier Verification</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Quality Control Inspection</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Order Follow-up</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/products-we-source" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li>Guangzhou, Guangdong, China</li>
                <li>info@ssourcingchina.com</li>
                <li>+86 123 456 7890</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <Link to="/" className="hover:text-white">Privacy Policy</Link>
              <Link to="/" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}