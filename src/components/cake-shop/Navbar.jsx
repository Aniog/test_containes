import { useState } from 'react';
import { Menu, X, Cake } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ['Home', 'Our Cakes', 'About', 'Testimonials', 'Order'];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffaf5]/95 backdrop-blur-sm border-b border-[#f0dcc8] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
          <Cake className="w-7 h-7 text-rose-400" />
          <span className="font-playfair text-2xl font-bold text-[#3d2b1f]">La Douceur</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-[#7a5c4a] hover:text-rose-400 font-medium transition-colors duration-200 text-sm tracking-wide"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('Order')}
          className="hidden md:block bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2 px-6 rounded-full text-sm transition-all duration-200"
        >
          Order Now
        </button>

        <button className="md:hidden text-[#3d2b1f]" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#fffaf5] border-t border-[#f0dcc8] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-[#7a5c4a] hover:text-rose-400 font-medium py-1"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
