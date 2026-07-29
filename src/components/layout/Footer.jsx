import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter, Globe } from 'lucide-react';

const services = [
  { label: 'Supplier Sourcing', path: '/services' },
  { label: 'Factory Verification', path: '/services' },
  { label: 'Quality Inspection', path: '/services' },
  { label: 'Production Follow-up', path: '/services' },
  { label: 'Shipping Coordination', path: '/services' },
];

const quickLinks = [
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A2332] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#1A3C6E] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-lg leading-none">SSourcing</span>
                <span className="text-[#C0392B] text-xs font-semibold tracking-wider uppercase leading-none">China</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-[#1A3C6E] rounded-md flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-slate-300" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-[#1A3C6E] rounded-md flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-slate-300" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-[#1A3C6E] rounded-md flex items-center justify-center transition-colors" aria-label="Website">
                <Globe className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.path} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C0392B] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C0392B] flex-shrink-0" />
                <a href="mailto:info@ssourcing.cn" className="text-slate-400 hover:text-white text-sm transition-colors">
                  info@ssourcing.cn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C0392B] flex-shrink-0" />
                <a href="tel:+8620XXXXXXXX" className="text-slate-400 hover:text-white text-sm transition-colors">
                  +86 20 XXXX XXXX
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-slate-800 rounded-lg">
              <p className="text-xs text-slate-400">Response time: <span className="text-white font-medium">Within 24 hours</span></p>
              <p className="text-xs text-slate-400 mt-1">Working hours: <span className="text-white font-medium">Mon–Fri, 9am–6pm CST</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
