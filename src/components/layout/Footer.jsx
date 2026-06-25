import { Mail, Phone, MapPin, Linkedin, Youtube, Globe } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folding Machine',
    'Metal Folder Machine',
  ],
  Company: ['About Us', 'Our Technology', 'Quality Standards', 'Careers'],
  Support: ['Documentation', 'Technical Support', 'Spare Parts', 'Training'],
};

const Footer = () => {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy border-t border-brand-steel/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-brand-gold font-bold text-2xl tracking-widest uppercase">
                ARTITECT
              </div>
              <div className="text-brand-white text-xs tracking-[0.3em] uppercase font-light">
                MACHINERY
              </div>
            </div>
            <p className="text-brand-silver text-sm leading-relaxed mb-6 max-w-xs">
              Precision-engineered sheet metal folding solutions trusted by manufacturers worldwide. Built for performance, designed for longevity.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@artitectmachinery.com" className="flex items-center gap-3 text-brand-silver hover:text-brand-gold transition-colors text-sm">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                info@artitectmachinery.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-brand-silver hover:text-brand-gold transition-colors text-sm">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-brand-silver text-sm">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                Industrial Zone, Manufacturing City
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-brand-white font-semibold text-sm uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#products"
                      onClick={(e) => { e.preventDefault(); handleNavClick('#products'); }}
                      className="text-brand-silver hover:text-brand-gold transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-steel/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-silver text-sm">
            © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-brand-silver hover:text-brand-gold transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-brand-silver hover:text-brand-gold transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-brand-silver hover:text-brand-gold transition-colors" aria-label="Website">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
