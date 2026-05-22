import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-black border-t border-neutral-800 py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-thin tracking-[0.35em] uppercase text-white text-sm mb-2">Microuniverse</p>
          <p className="text-xs text-neutral-600 tracking-widest uppercase">Exploring the invisible world</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <Link to="/" className="text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors">Home</Link>
          <Link to="/gallery" className="text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors">Gallery</Link>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-neutral-900">
        <p className="text-xs text-neutral-700 tracking-widest uppercase text-center">
          © 2026 Microuniverse — All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
