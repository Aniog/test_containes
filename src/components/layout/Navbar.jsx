import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-serif font-bold tracking-tighter",
            scrolled ? "text-brand-dark" : "text-white"
          )}>
            ARTITECT<span className="text-brand-gold">MACHINERY</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors hover:text-brand-gold",
                scrolled ? "text-brand-dark" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-gold text-white px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-brand-gold/90 transition-colors"
          >
            Inquiry
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-dark text-lg font-medium hover:text-brand-gold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-gold text-white text-center py-3 rounded-sm font-bold uppercase tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            Contact Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
