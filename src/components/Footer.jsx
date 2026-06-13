import React from 'react';
import { Settings } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <span className="text-xl font-bold tracking-tighter text-white flex items-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-blue-500" />
              ARTITECT
            </span>
            <p className="text-sm text-gray-400">
              Leading manufacturer of elegant, high-precision double folding machines and sheet metal equipment.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">ProFolder X1</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Compact C-200</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">TitanFold H.D.</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Custom Tooling</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">News & Events</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Manuals</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;