import { Leaf, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-[#1b4332] text-white py-12 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 text-[#e9c46a] font-bold text-xl font-serif mb-3">
          <Leaf className="w-5 h-5" />
          Animal World
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          Exploring the wonders of the animal kingdom — from the depths of the ocean to the peaks of the mountains.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-[#e9c46a] mb-3 uppercase tracking-wide text-sm">Explore</h4>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link to="/animals" className="hover:text-white transition-colors">Animals</Link></li>
          <li><Link to="/habitats" className="hover:text-white transition-colors">Habitats</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-[#e9c46a] mb-3 uppercase tracking-wide text-sm">Contact</h4>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@animalworld.com</li>
          <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> www.animalworld.com</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#2d6a4f] text-center text-gray-400 text-sm">
      © 2026 Animal World. All rights reserved.
    </div>
  </footer>
);

export default Footer;
