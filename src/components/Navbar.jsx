import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <span className="font-display text-2xl font-bold text-coral cursor-pointer" onClick={() => scrollTo('hero')}>
          Sip & Bloom
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {['menu', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-charcoal font-body font-semibold capitalize hover:text-coral transition-colors text-sm tracking-wide"
            >
              {item === 'menu' ? 'Our Teas' : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-coral text-white px-6 py-2 rounded-full font-body font-semibold text-sm hover:bg-coral-dark transition-colors"
          >
            Order Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-charcoal transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-border px-6 py-4 flex flex-col gap-4">
          {['menu', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-charcoal font-body font-semibold capitalize text-left hover:text-coral transition-colors"
            >
              {item === 'menu' ? 'Our Teas' : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-coral text-white px-6 py-2 rounded-full font-body font-semibold text-sm hover:bg-coral-dark transition-colors w-fit"
          >
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
