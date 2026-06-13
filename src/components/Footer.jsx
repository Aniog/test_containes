import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const serviceLinks = [
  { name: 'Supplier Sourcing', path: '/services' },
  { name: 'Factory Verification', path: '/services' },
  { name: 'Quality Control', path: '/services' },
  { name: 'Production Follow-up', path: '/services' },
  { name: 'Shipping Coordination', path: '/services' },
];

const companyLinks = [
  { name: 'About Us', path: '/' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const productLinks = [
  { name: 'Electronics', path: '/products' },
  { name: 'Apparel & Textiles', path: '/products' },
  { name: 'Machinery & Parts', path: '/products' },
  { name: 'Packaging', path: '/products' },
  { name: 'Home & Garden', path: '/products' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Source from China?</h3>
              <p className="text-slate-400">Get a free quote and start working with verified suppliers today.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-600 transition-colors shrink-0"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">S</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">SSourcing<span className="text-blue-400">China</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping with complete transparency.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@ssourcingchina.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                hello@ssourcingchina.com
              </a>
              <a href="tel:+8675588881234" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                +86 755 8888 1234
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Room 1208, Block A, Shennan Ave, Futian District, Shenzhen, China 518000</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p> SSourcing China. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
