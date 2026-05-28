import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mexico Food
        </span>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {[
            { label: 'Dishes', href: '#dishes' },
            { label: 'Regions', href: '#regions' },
            { label: 'Ingredients', href: '#ingredients' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`transition-colors duration-200 hover:text-orange-500 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
