import { Link } from 'react-router-dom';
import { Factory, ShieldCheck, Ship, Globe2 } from 'lucide-react';

const footerNav = [
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'Supplier Sourcing' },
      { to: '/services', label: 'Factory Verification' },
      { to: '/services', label: 'Quality Inspection' },
      { to: '/services', label: 'Shipping Coordination' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/how-it-works', label: 'How It Works' },
      { to: '/case-studies', label: 'Case Studies' },
      { to: '/blog', label: 'Blog' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { to: '/products', label: 'Electronics' },
      { to: '/products', label: 'Home & Garden' },
      { to: '/products', label: 'Textiles & Apparel' },
      { to: '/products', label: 'Industrial Parts' },
    ],
  },
];

const trustPoints = [
  { icon: Factory, label: 'Factory Verified' },
  { icon: ShieldCheck, label: 'QC Inspected' },
  { icon: Ship, label: 'Shipping Managed' },
  { icon: Globe2, label: 'Global Buyers' },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-900 font-bold">
                SS
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-white">SSourcing</div>
                <div className="text-xs text-slate-400">China</div>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A trusted China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {trustPoints.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300">
                  <Icon className="h-3.5 w-3.5" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <Link to="/" className="hover:text-slate-300">Privacy Policy</Link>
              <Link to="/" className="hover:text-slate-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
