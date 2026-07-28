import { Link } from 'react-router-dom';
import { Ship, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  Services: [
    { to: '/services', label: 'Supplier Sourcing' },
    { to: '/services', label: 'Factory Verification' },
    { to: '/services', label: 'Quality Control' },
    { to: '/services', label: 'Shipping & Logistics' },
  ],
  Company: [
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' },
  ],
  Products: [
    { to: '/products', label: 'Electronics' },
    { to: '/products', label: 'Machinery' },
    { to: '/products', label: 'Textiles & Apparel' },
    { to: '/products', label: 'Home & Kitchen' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-steel-900 text-steel-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-extrabold text-xl text-white mb-4">
              <Ship className="h-7 w-7 text-brand-400" />
              <span>SSourcing<span className="text-brand-400">China</span></span>
            </Link>
            <p className="text-steel-400 max-w-sm text-sm leading-relaxed mb-6">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers,
              verify factories, inspect quality, and manage shipping—so you can focus on growing your business.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-400 shrink-0" />
                <span>Guangzhou, Guangdong, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-400 shrink-0" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-400 shrink-0" />
                <span>+86 20 8888 6666</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-steel-400 hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-steel-500 hover:text-brand-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-steel-500 hover:text-brand-400 transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
