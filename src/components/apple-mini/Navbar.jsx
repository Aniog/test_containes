import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#features',    label: 'Features' },
  { href: '#performance', label: 'Performance' },
  { href: '#gallery',     label: 'Gallery' },
  { href: '#articles',    label: 'Articles' },
  { href: '#specs',       label: 'Specs' },
  { href: '#faq',         label: 'FAQ' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            ⌘ APPLE <span className="text-blue-400">mini</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className={`transition-colors duration-300 relative pb-0.5 ${
                  isActive
                    ? scrolled
                      ? 'text-blue-600 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full'
                      : 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:rounded-full'
                    : scrolled
                      ? 'text-gray-500 hover:text-gray-900'
                      : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
        <a
          href="#buy"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Buy Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
