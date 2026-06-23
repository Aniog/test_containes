import { useState } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const links = ['Explore', 'Gallery', 'Worlds', 'Science', 'About'];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a0f]/80 backdrop-blur-md border-b border-[#1a3a50]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Microscope className="w-6 h-6 text-[#00d4ff]" />
          <span className="text-[#e8f4f8] font-black text-xl tracking-tight">
            Micro<span className="text-[#00d4ff]">Cosmos</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-[#8ab4c8] hover:text-[#00d4ff] text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Science')}
            className="bg-[#00d4ff] text-[#050a0f] px-5 py-2 rounded-full text-sm font-bold hover:bg-[#00ffcc] transition-colors duration-200"
          >
            Discover
          </button>
        </div>

        <button
          className="md:hidden text-[#e8f4f8] bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1a26] border-t border-[#1a3a50] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-[#8ab4c8] hover:text-[#00d4ff] text-base font-medium text-left bg-transparent border-none cursor-pointer transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
