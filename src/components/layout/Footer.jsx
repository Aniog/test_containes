import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-xl text-white">
                SSourcing <span className="text-primary">China</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted China-based sourcing agent. We help global buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping from China.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Products We Source', path: '/products' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Blog', path: '/blog' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Supplier Sourcing & Verification',
                'Factory Audit & Assessment',
                'Quality Inspection (QC)',
                'Production Follow-Up',
                'Shipping & Logistics',
                'Sample Management',
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm hover:text-primary transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+861234567890" className="text-sm hover:text-primary transition-colors">
                  +86 123 4567 890
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact">
                <span className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
                  Request a Quote
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}