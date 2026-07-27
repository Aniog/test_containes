import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-xl font-bold text-white">SSourcing<span className="text-accent-500">China</span></span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, ensure quality, and streamline logistics.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/services', label: 'Services' },
                { to: '/how-it-works', label: 'How It Works' },
                { to: '/products', label: 'Products We Source' },
                { to: '/case-studies', label: 'Case Studies' },
                { to: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {[
                'Supplier Identification',
                'Factory Verification',
                'Quality Control',
                'Production Follow-up',
                'Shipping Coordination',
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" />
                <span>Room 1208, Building A, 88 Huaihai Road, Shanghai 200021, China</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="w-4 h-4 flex-shrink-0 text-brand-400" />
                <span>+86 138 0000 0000</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0 text-brand-400" />
                <span>info@ssourcingchina.com</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-brand-800 flex items-center justify-center hover:bg-brand-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-slate-300" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-brand-800 flex items-center justify-center hover:bg-brand-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
