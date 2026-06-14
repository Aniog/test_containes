import { Factory, Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { label: 'Double Folding Machine', href: '#products' },
      { label: 'Sheet Metal Folder', href: '#products' },
      { label: 'Metal Folding Machine', href: '#products' },
      { label: 'Custom Solutions', href: '#contact' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#about' },
      { label: 'Careers', href: '#contact' },
      { label: 'News', href: '#contact' },
    ],
    support: [
      { label: 'Contact', href: '#contact' },
      { label: 'Documentation', href: '#contact' },
      { label: 'Warranty', href: '#contact' },
      { label: 'Service', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: 'mailto:info@artitect-machinery.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <Factory className="h-6 w-6 text-slate-900" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-white">
                    ARTITECT
                  </span>
                  <span className="text-xs font-medium tracking-widest text-slate-400 uppercase">
                    Machinery
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
                Precision sheet metal folding solutions for manufacturers worldwide.
                Engineering excellence since 1998.
              </p>
              <div className="mt-6 flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 transition-colors hover:bg-slate-700"
                    >
                      <Icon className="h-5 w-5 text-slate-400" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-sm font-semibold text-white">Products</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Support</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {currentYear} ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
