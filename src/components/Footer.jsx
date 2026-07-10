import { Leaf } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 mt-auto">
    <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-farm-green font-semibold">
        <Leaf className="w-4 h-4" />
        Green Valley Farm
      </div>
      <div className="flex gap-6 text-sm text-gray-400">
        <NavLink to="/" className="hover:text-farm-green transition-colors">Home</NavLink>
        <NavLink to="/about" className="hover:text-farm-green transition-colors">About</NavLink>
        <NavLink to="/fruits" className="hover:text-farm-green transition-colors">Our Fruits</NavLink>
        <NavLink to="/contact" className="hover:text-farm-green transition-colors">Contact</NavLink>
      </div>
      <p className="text-xs text-gray-400">© 2026 Green Valley Farm. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
