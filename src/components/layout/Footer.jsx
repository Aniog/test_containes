import { Mail, Phone, MapPin, Linkedin, Youtube, Twitter } from 'lucide-react';

const footerProducts = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folding Machine',
];

const footerLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D1B2A] border-t border-[#C9A84C]/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div
                className="text-2xl font-extrabold tracking-widest uppercase text-[#C9A84C]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                ARTITECT
              </div>
              <div
                className="text-xs font-semibold tracking-[0.3em] uppercase text-[#8A9BB0]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                MACHINERY
              </div>
            </div>
            <p
              className="text-[#8A9BB0] text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Precision-engineered sheet metal folding machines trusted by fabricators worldwide for over 20 years.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-[#C9A84C]/30 flex items-center justify-center text-[#8A9BB0] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4
              className="text-xs font-bold text-white tracking-widest uppercase mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {footerProducts.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    onClick={(e) => { e.preventDefault(); handleNav('#products'); }}
                    className="text-[#8A9BB0] text-sm hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-bold text-white tracking-widest uppercase mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-[#8A9BB0] text-sm hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold text-white tracking-widest uppercase mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+18002784832"
                  className="text-[#8A9BB0] text-sm hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  +1 (800) 278-4832
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:sales@artitectmachinery.com"
                  className="text-[#8A9BB0] text-sm hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  sales@artitectmachinery.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <span
                  className="text-[#8A9BB0] text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Industrial Park,
                  <br />
                  Machinery District
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#8A9BB0] text-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p
            className="text-[#8A9BB0] text-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Precision Engineered. Perfectly Formed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
