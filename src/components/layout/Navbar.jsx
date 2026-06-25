import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-navy/98 shadow-2xl backdrop-blur-sm'
          : 'bg-brand-navy/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-brand-navy font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>A</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="text-white font-bold text-base tracking-widest uppercase"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                ARTITECT
              </span>
              <span className="text-brand-gold text-xs tracking-widest uppercase font-medium">
                MACHINERY
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 cursor-pointer ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-brand-gold'
                    : 'text-brand-silver hover:text-white'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-brand-gold text-brand-navy px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide uppercase hover:bg-yellow-400 transition-all duration-200 cursor-pointer"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy border-t border-brand-gold/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-left text-sm font-medium tracking-wide uppercase py-2 transition-colors cursor-pointer ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-brand-gold'
                    : 'text-brand-silver hover:text-white'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-brand-gold text-brand-navy px-6 py-3 rounded-lg text-sm font-bold tracking-wide uppercase hover:bg-yellow-400 transition-all mt-2 cursor-pointer"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
