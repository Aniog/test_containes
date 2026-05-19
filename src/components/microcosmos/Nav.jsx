import { useState, useEffect } from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Explore', 'Gallery', 'Worlds', 'About'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-neutral-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <span className="text-white font-black text-xl tracking-tighter">
          MICRO<span className="text-neutral-400">COSMOS</span>
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200 tracking-widest uppercase"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#explore"
          className="hidden md:inline-flex items-center gap-2 border border-neutral-700 text-white text-xs font-semibold uppercase tracking-widest px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300"
        >
          Discover
        </a>
      </div>
    </nav>
  );
};

export default Nav;
