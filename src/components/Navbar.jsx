const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16 py-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🐴</span>
        <span className="text-white font-bold text-xl tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
          Equine Estate
        </span>
      </div>
      <ul className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium tracking-wide">
        <li><a href="#" className="hover:text-amber-300 transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-amber-300 transition-colors">Breeds</a></li>
        <li><a href="#" className="hover:text-amber-300 transition-colors">Gallery</a></li>
        <li><a href="#" className="hover:text-amber-300 transition-colors">About</a></li>
      </ul>
      <a
        href="#"
        className="hidden md:inline-block border-2 border-white text-white hover:bg-white hover:text-stone-900 transition-all rounded-full px-6 py-2 text-sm font-semibold"
      >
        Contact Us
      </a>
    </nav>
  );
};

export default Navbar;
