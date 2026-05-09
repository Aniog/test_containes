import { useState, useEffect } from 'react';
import { Shield, Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: '保险产品', href: '#products' },
  { label: '为什么选择我们', href: '#why-us' },
  { label: '客户评价', href: '#testimonials' },
  { label: '联系我们', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              安盾保险
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 bg-transparent border-none p-0 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:400-888-8888"
              className={`flex items-center gap-1.5 text-sm font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              400-888-8888
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors border-none"
            >
              免费咨询
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg border-none bg-transparent ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-gray-700 font-medium py-3 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors bg-transparent border-none text-base"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="tel:400-888-8888"
                className="flex items-center gap-2 text-gray-700 font-medium py-2 px-3"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                400-888-8888
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg border-none text-base"
              >
                免费咨询
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
