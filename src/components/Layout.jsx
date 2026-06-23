import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

export const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-200 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> sourcing@ssourcingchina.com</span>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +86 138-0000-0000</span>
          </div>
          <div className="flex items-center space-x-4">
             <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Shenzhen, China</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center text-2xl font-bold text-primary">
            <Globe className="w-8 h-8 mr-2 text-blue-600" />
            <span className="text-slate-900">SSourcing</span><span className="text-blue-600">China</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
            <NavLink to="/services" currentPath={location.pathname}>Services</NavLink>
            <NavLink to="/how-it-works" currentPath={location.pathname}>How It Works</NavLink>
            <NavLink to="/products" currentPath={location.pathname}>Products</NavLink>
            <NavLink to="/case-studies" currentPath={location.pathname}>Case Studies</NavLink>
            <NavLink to="/about" currentPath={location.pathname}>About Us</NavLink>
             <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow">Get a Quote</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-4 shadow-lg absolute w-full">
             <MobileNavLink to="/" currentPath={location.pathname}>Home</MobileNavLink>
            <MobileNavLink to="/services" currentPath={location.pathname}>Services</MobileNavLink>
            <MobileNavLink to="/how-it-works" currentPath={location.pathname}>How It Works</MobileNavLink>
            <MobileNavLink to="/products" currentPath={location.pathname}>Products</MobileNavLink>
            <MobileNavLink to="/case-studies" currentPath={location.pathname}>Case Studies</MobileNavLink>
             <MobileNavLink to="/about" currentPath={location.pathname}>About Us</MobileNavLink>
             <MobileNavLink to="/contact" currentPath={location.pathname}>Contact</MobileNavLink>
            <div className="pt-4 border-t border-slate-100">
               <Link to="/contact" className="block w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get a Quote</Button>
               </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center text-2xl font-bold text-white mb-6">
              <Globe className="w-8 h-8 mr-2 text-blue-500" />
              <span>SSourcing<span className="text-blue-500">China</span></span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner on the ground in China. We handle supplier verification, quality control, and shipping so you can focus on growing your business.
            </p>
             <div className="flex space-x-4">
                {/* Social icons placeholder */}
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white">IN</div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white">FB</div>
             </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/services#supplier-sourcing" className="hover:text-blue-400 transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services#factory-audits" className="hover:text-blue-400 transition-colors">Factory Audits</Link></li>
              <li><Link to="/services#quality-inspections" className="hover:text-blue-400 transition-colors">Quality Inspections</Link></li>
              <li><Link to="/services#order-management" className="hover:text-blue-400 transition-colors">Order Management</Link></li>
              <li><Link to="/services#shipping-logistics" className="hover:text-blue-400 transition-colors">Shipping & Logistics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h3>
             <ul className="space-y-3 text-slate-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
             <ul className="space-y-4 text-slate-400">
                <li className="flex items-start">
                   <MapPin className="w-5 h-5 mr-3 text-blue-500 mt-1 flex-shrink-0" />
                   <span>Futian District, Shenzhen,<br/>Guangdong Province, China</span>
                </li>
                 <li className="flex items-center">
                   <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                   <span>+86 138-0000-0000</span>
                </li>
                 <li className="flex items-center">
                   <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                   <span>sourcing@ssourcingchina.com</span>
                </li>
             </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, currentPath, children }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  return (
    <Link 
      to={to} 
      className={`font-medium transition-colors ${
        isActive 
          ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
          : 'text-slate-600 hover:text-blue-600'
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, currentPath, children }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  return (
    <Link 
      to={to} 
      className={`block text-lg font-medium py-2 transition-colors ${
        isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
      }`}
    >
      {children}
    </Link>
  );
};
