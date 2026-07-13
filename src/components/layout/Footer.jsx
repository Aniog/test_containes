import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

const PRODUCT_LINKS = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
];

const COMPANY_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-serif font-bold text-white text-2xl tracking-wide leading-none">
                ARTITECT
              </div>
              <div className="font-sans text-brand-accent text-xs tracking-[0.3em] uppercase font-medium mt-0.5">
                MACHINERY
              </div>
            </div>
            <p className="font-sans text-brand-mid text-sm leading-relaxed mb-6">
              Precision-engineered sheet metal folding machines built for industrial excellence. Trusted by manufacturers worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-brand-mid hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-brand-mid hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Products
            </h4>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleClick('#products')}
                    className="font-sans text-brand-mid hover:text-brand-accent text-sm transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="font-sans text-brand-mid hover:text-brand-accent text-sm transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-accent mt-0.5 shrink-0" />
                <span className="font-sans text-brand-mid text-sm leading-relaxed">
                  Industrial Zone, Manufacturing District<br />
                  Global Operations
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-accent shrink-0" />
                <a href="tel:+1234567890" className="font-sans text-brand-mid hover:text-brand-accent text-sm transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-accent shrink-0" />
                <a href="mailto:info@artitectmachinery.com" className="font-sans text-brand-mid hover:text-brand-accent text-sm transition-colors">
                  info@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-brand-mid text-xs">
            © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <p className="font-sans text-brand-mid text-xs">
            Precision Engineered. Perfectly Formed.
          </p>
        </div>
      </div>
    </footer>
  );
}
