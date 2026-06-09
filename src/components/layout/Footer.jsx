import { Link } from 'react-router-dom';
import { Hammer } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Hammer className="w-6 h-6 text-blue-500" />
              <span className="font-bold text-lg tracking-tight text-white uppercase">ARTITECT</span>
            </Link>
            <p className="text-sm text-slate-400">
              Leading the industry in precision double folding machines and sheet metal processing equipment.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#products" className="hover:text-white transition-colors">Double Folding Machine</Link></li>
              <li><Link to="/#products" className="hover:text-white transition-colors">Sheet Metal Folder</Link></li>
              <li><Link to="/#products" className="hover:text-white transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Support & Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>info@artitectmachinery.com</li>
              <li>+1 (555) 123-4567</li>
              <li>100 Industrial Parkway<br />Manufacturing City, MX 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
