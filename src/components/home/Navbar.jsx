import { useState } from 'react';
import { Menu, X, Bike } from 'lucide-react';

const navLinks = [
  { label: 'Bikes', href: '#bikes' },
  { label: 'Features', href: '#features' },
  { label: 'Stats', href: '#stats' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
            <Bike className="w-7 h-7 text-[#e94560]" />
            <span>VELOX</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#bikes"
              className="bg-[#e94560] hover:bg-[#c73652] text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#16213e] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-white font-medium text-base transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#bikes"
            onClick={() => setOpen(false)}
            className="bg-[#e94560] hover:bg-[#c73652] text-white font-semibold px-5 py-2 rounded-xl text-sm text-center transition-colors"
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
