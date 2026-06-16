import { Mail, Phone, MapPin, Linkedin, Youtube, Twitter } from 'lucide-react';

const productLinks = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
  'Sheet Metal Folding Machine',
];

const companyLinks = [
  { label: 'About Us', href: '#why-us' },
  { label: 'Products', href: '#products' },
  { label: 'Applications', href: '#applications' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1C33] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-[#C9A84C] flex items-center justify-center">
                <span className="text-[#1B2A4A] font-bold text-sm">AM</span>
              </div>
              <div>
                <span className="text-white font-bold text-base tracking-wide">ARTITECT</span>
                <span className="text-[#C9A84C] font-bold text-base tracking-wide"> MACHINERY</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Precision-engineered sheet metal folding machines for industrial and professional fabrication worldwide.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-[#1B2A4A] hover:bg-[#C9A84C] flex items-center justify-center transition-colors duration-200"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((product) => (
                <li key={product}>
                  <button
                    onClick={() => handleNavClick('#products')}
                    className="text-slate-400 hover:text-[#C9A84C] text-sm transition-colors duration-200 text-left"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-slate-400 hover:text-[#C9A84C] text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+1 (800) 278-4832</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">sales@artitect-machinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">1200 Industrial Blvd, Suite 400<br />Detroit, MI 48201, USA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-[#C9A84C] text-xs transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-[#C9A84C] text-xs transition-colors duration-200">Terms of Use</a>
            <a href="#" className="text-slate-500 hover:text-[#C9A84C] text-xs transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
