import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Explore', 'Gallery', 'Specimens', 'Ecosystem', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050d1a]/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-slate-50">
            Micro<span className="text-[#00d4c8]">Cosmos</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-400 hover:text-[#00d4c8] transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#gallery"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00d4c8]/10 border border-[#00d4c8]/40 text-[#00d4c8] text-sm font-semibold hover:bg-[#00d4c8]/20 transition-all duration-200"
        >
          View Gallery
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
