import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  Services: [
    { to: '/services', label: 'Supplier Sourcing' },
    { to: '/services', label: 'Factory Verification' },
    { to: '/services', label: 'Quality Inspection' },
    { to: '/services', label: 'Production Follow-up' },
    { to: '/services', label: 'Shipping Coordination' },
  ],
  Company: [
    { to: '/', label: 'About Us' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ],
  'Products': [
    { to: '/products', label: 'Electronics' },
    { to: '/products', label: 'Machinery' },
    { to: '/products', label: 'Textiles & Apparel' },
    { to: '/products', label: 'Home & Kitchen' },
    { to: '/products', label: 'Packaging & Printing' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white tracking-tight">
                SSourcing<span className="text-gold-400">China</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              A trusted China-based sourcing agent helping global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping since 2012.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Guangzhou, Guangdong, China</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>+86 20 8888 6666</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-300 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-navy-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}