import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', path: '/services#supplier-sourcing' },
    { label: 'Factory Verification', path: '/services#factory-verification' },
    { label: 'Quality Inspection', path: '/services#quality-inspection' },
    { label: 'Production Monitoring', path: '/services#production-monitoring' },
    { label: 'Shipping Coordination', path: '/services#shipping-coordination' },
  ],
  company: [
    { label: 'About Us', path: '/contact' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  resources: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Products We Source', path: '/products' },
    { label: 'FAQ', path: '/#faq' },
    { label: 'Get a Quote', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">SSourcing</span>
                <span className="text-xl font-light text-slate-400 ml-1">China</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-slate-300 hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+8675512345678" className="text-slate-300 hover:text-white transition-colors">
                  +86 755 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-300">Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
