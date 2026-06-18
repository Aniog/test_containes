import { useState } from 'react';
import { Menu, X, Cake } from 'lucide-react';

const navLinks = [
  { label: 'Our Cakes', href: '#cakes' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdf6f0]/95 backdrop-blur-sm border-b border-[#f0ddd4]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Cake className="w-6 h-6 text-[#c2185b]" />
          <span className="font-playfair text-xl font-bold text-[#2d1b0e]">Sweet Crumbs</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#5c3d2e] hover:text-[#c2185b] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-[#c2185b] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#ad1457] transition-colors"
        >
          Order Now
        </a>

        <button
          className="md:hidden p-2 text-[#2d1b0e]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#fdf6f0] border-t border-[#f0ddd4] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5c3d2e] hover:text-[#c2185b] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#c2185b] text-white px-5 py-2 rounded-full text-sm font-semibold text-center hover:bg-[#ad1457] transition-colors"
            onClick={() => setOpen(false)}
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
