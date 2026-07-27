import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/#about' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
  ],
  services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  resources: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Products We Source', path: '/products' },
    { label: 'FAQ', path: '/#faq' },
    { label: 'Contact', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-brand rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                SSourcing <span className="text-brand">China</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xs">
              Your reliable China sourcing partner. We help overseas buyers find
              trustworthy suppliers, verify factories, inspect quality, and
              coordinate shipping.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-3 text-slate-300 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+8613800138000" className="flex items-center gap-3 text-slate-300 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand" />
                +86 138 0013 8000
              </a>
              <div className="flex items-start gap-3 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-6 md:p-8 bg-navy-light rounded-xl border border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                Ready to source from China?
              </h3>
              <p className="text-slate-300 text-sm">
                Get a free sourcing quote with no obligation.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors shrink-0"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-slate-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-slate-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
