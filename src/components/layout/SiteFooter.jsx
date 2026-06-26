import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    items: [
      { label: 'Supplier Sourcing', to: '/services' },
      { label: 'Factory Verification', to: '/services' },
      { label: 'Quality Inspection', to: '/services' },
      { label: 'Shipping Coordination', to: '/services' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

const SiteFooter = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Globe className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                SSourcing China
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Your trusted China-based sourcing agent for reliable suppliers, quality control, and shipping coordination.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+86 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Shanghai, China</span>
              </div>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-slate-900">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-slate-600 hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
