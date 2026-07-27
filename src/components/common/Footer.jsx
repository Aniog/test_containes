import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white tracking-tight">
                SSourcing<span className="text-amber-500">China</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Your professional boots-on-the-ground partner in China. We help global businesses navigate the complexities of China sourcing with transparency and professionalism.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 underline decoration-amber-500 decoration-2 underline-offset-8">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-amber-400 transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Quality Control</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Shipping Coordination</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 underline decoration-amber-500 decoration-2 underline-offset-8">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="/how-it-works" className="hover:text-amber-400 transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> How It Works</Link></li>
              <li><Link to="/products" className="hover:text-amber-400 transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-amber-400 transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-amber-400 transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Sourcing Blog</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 underline decoration-amber-500 decoration-2 underline-offset-8">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span>15th Floor, Manufacturing Center Plaza, Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-amber-500 mr-3 flex-shrink-0" size={18} />
                <span>+86 755 8888 9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-amber-500 mr-3 flex-shrink-0" size={18} />
                <span>contact@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} SSourcing China. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
