import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Supplier Verification', path: '/services' },
    { label: 'Factory Audits', path: '/services' },
    { label: 'Quality Control', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  Company: [
    { label: 'About Us', path: '/' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  'Products': [
    { label: 'Electronics', path: '/products' },
    { label: 'Machinery', path: '/products' },
    { label: 'Textiles', path: '/products' },
    { label: 'Home & Kitchen', path: '/products' },
    { label: 'Packaging', path: '/products' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                <span className="text-navy-dark font-bold text-sm">SC</span>
              </div>
              <span className="text-xl font-bold text-white">SSourcing China</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Professional China sourcing agent helping global buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping since 2012.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+86 755 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@ssourcingchina.com</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}