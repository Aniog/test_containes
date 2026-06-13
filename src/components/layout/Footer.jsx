import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-surface/70 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-gold font-bold text-2xl block leading-tight">ARTITECT</span>
              <span className="text-surface/50 text-xs tracking-widest uppercase font-medium">MACHINERY</span>
            </div>
            <p className="text-sm leading-relaxed text-surface/60 mt-4">
              Precision-engineered sheet metal folding machines built for professionals who demand accuracy, durability, and performance.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-surface font-semibold text-sm tracking-widest uppercase mb-5">Products</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folder Machine',
                'Metal Folding Machine',
              ].map((p) => (
                <li key={p}>
                  <button
                    onClick={() => handleNav('#products')}
                    className="hover:text-gold transition-colors duration-200 text-left"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-surface font-semibold text-sm tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Features', href: '#features' },
                { label: 'Contact', href: '#contact' },
                { label: 'Get a Quote', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="hover:text-gold transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-surface font-semibold text-sm tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>+1 (800) 278-4832</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Industrial Park, Precision Ave,<br />Manufacturing District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/15 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-surface/40">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p>Precision Engineered. Perfectly Formed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
