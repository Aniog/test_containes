import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-tight">SSourcing</span>
                <span className="text-text-muted text-[10px] font-medium tracking-wider uppercase">China</span>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Production Monitoring', 'Shipping Coordination'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-text-muted hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', path: '/' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-text-muted hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-text-muted mt-0.5 shrink-0" />
                <span className="text-text-muted text-sm">
                  Room 1208, Block A, Fortune Plaza<br />
                  Shenzhen, Guangdong 518000, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-text-muted shrink-0" />
                <a href="tel:+8613812345678" className="text-text-muted hover:text-white text-sm transition-colors">
                  +86 138 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-text-muted shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-text-muted hover:text-white text-sm transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-text-muted hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
