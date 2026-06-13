import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Supplier Sourcing', path: '/services' },
    { name: 'Factory Audits', path: '/services' },
    { name: 'Quality Inspection', path: '/services' },
    { name: 'Production Monitoring', path: '/services' },
    { name: 'Shipping & Logistics', path: '/services' },
  ],
  company: [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products We Source', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-500 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white tracking-tight">SSourcing</span>
                <span className="text-[10px] font-medium text-white/60 tracking-widest uppercase -mt-0.5">China</span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Professional sourcing services for global buyers. We bridge the gap between you and reliable Chinese manufacturers.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@ssourcingchina.com
              </a>
              <a href="tel:+8613800138000" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +86 138 0013 8000
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" /> Room 1205, Trade Center,<br />Guangzhou, China 510000
              </span>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Newsletter</h3>
            <p className="text-sm text-white/70 mb-4">
              Get sourcing tips, market updates, and new supplier insights delivered to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/80 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/80 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
