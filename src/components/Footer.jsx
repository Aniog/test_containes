import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-black border-t border-neutral-800 py-12 md:py-16">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-white font-black text-lg tracking-widest uppercase mb-2">Microuniverse</p>
          <p className="text-neutral-500 text-xs max-w-xs leading-relaxed">
            Revealing the extraordinary beauty hidden within the microscopic world.
          </p>
        </div>
        <div className="flex gap-8">
          <Link to="/" className="text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors">Home</Link>
          <Link to="/gallery" className="text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors">Gallery</Link>
        </div>
      </div>
      <div className="mt-10 pt-8 border-t border-neutral-900 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-neutral-600 text-xs">© 2026 Microuniverse. All rights reserved.</p>
        <p className="text-neutral-600 text-xs tracking-widest uppercase">Science · Art · Discovery</p>
      </div>
    </div>
  </footer>
);

export default Footer;
