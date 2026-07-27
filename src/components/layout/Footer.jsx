import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                SSourcing<span className="text-blue-400">China</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Professional China sourcing agent helping global buyers find reliable suppliers,
              verify factories, and manage quality from order to delivery.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 flex-shrink-0 text-blue-400" />
              <span>Shenzhen & Yiwu, China</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['Supplier Sourcing', '/services'],
                ['Factory Verification', '/services'],
                ['Quality Inspection', '/services'],
                ['Production Follow-up', '/services'],
                ['Shipping & Logistics', '/services'],
                ['Private Label & OEM', '/services'],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link to={path} className="text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['How It Works', '/how-it-works'],
                ['Products We Source', '/products'],
                ['Case Studies', '/case-studies'],
                ['Blog', '/blog'],
                ['Contact Us', '/contact'],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link to={path} className="text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 flex-shrink-0 text-blue-400" />
                <span>+86 755 0000 0000</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Globe className="w-4 h-4 flex-shrink-0 text-blue-400" />
                <span>Mon–Fri, 9:00–18:00 CST</span>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-block bg-brand-blue hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            China Sourcing Agent · Supplier Verification · Quality Inspection · Shipping
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
