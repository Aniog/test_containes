import { Hammer, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <span className="p-1.5 bg-orange-500 rounded-sm">
                <Hammer className="h-5 w-5 text-white" />
              </span>
              <span className="font-bold text-lg tracking-wider text-white uppercase">Artitect</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Precision sheet metal folding machines for modern industries. Elegant design, robust performance, and unparalleled user-friendliness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#products" className="hover:text-white transition-colors">Double Folding Machines</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Sheet Metal Folders</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Compact Metal Folders</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Custom Machinery</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Our Technology</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Support</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>123 Industrial Parkway,<br />Innovation District, TX 75001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>sales@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;