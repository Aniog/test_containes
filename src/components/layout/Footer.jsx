import { Mail, Phone, MapPin, Linkedin, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-brand-silver">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-serif font-bold text-brand-gold text-2xl tracking-wide">ARTITECT</div>
              <div className="text-brand-silver text-xs tracking-[0.3em] uppercase font-sans font-medium">MACHINERY</div>
            </div>
            <p className="text-sm leading-relaxed text-brand-silver/80 mb-6">
              Precision-engineered sheet metal folding machines trusted by manufacturers worldwide. Built to perform. Designed to last.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 border border-brand-steel flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 border border-brand-steel flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-9 h-9 border border-brand-steel flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-brand-white text-xs tracking-widest uppercase font-semibold mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folder Machine',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#products'); }}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-brand-white text-xs tracking-widest uppercase font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Why Artitect', href: '#why' },
                { label: 'Industries Served', href: '#industries' },
                { label: 'Contact Us', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-white text-xs tracking-widest uppercase font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <span className="text-brand-silver/80">Industrial Zone, Manufacturing District, Global HQ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold shrink-0" />
                <a href="tel:+1234567890" className="hover:text-brand-gold transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold shrink-0" />
                <a href="mailto:info@artitect.com" className="hover:text-brand-gold transition-colors">info@artitect.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-steel">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-silver/60">
            © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-silver/60">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
