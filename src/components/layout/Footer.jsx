import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
    'Sheet Metal Folding Machine',
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white">
      {/* Gold accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-gold via-gold/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="10" width="18" height="3" rx="1" fill="#0D1B2A"/>
                  <rect x="6" y="4" width="10" height="3" rx="1" fill="#0D1B2A"/>
                  <rect x="4" y="15" width="14" height="3" rx="1" fill="#0D1B2A"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight tracking-wide">ARTITECT</div>
                <div className="text-gold text-xs font-semibold tracking-widest uppercase leading-tight">MACHINERY</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Precision engineered sheet metal folding machines built for industrial excellence. Trusted by manufacturers worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-200 text-white/70">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-200 text-white/70">
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-5">Products</h4>
            <ul className="space-y-3">
              {footerLinks.Products.map((item) => (
                <li key={item}>
                  <span className="text-white/60 hover:text-white text-sm transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">+1 (800) 278-4832</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">Industrial Zone, Manufacturing District</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Precision Engineered. Perfectly Formed.
          </p>
        </div>
      </div>
    </footer>
  );
}
