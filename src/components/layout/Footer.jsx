import { Mail, Phone, MapPin, Linkedin, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel-900 border-t border-steel-600/40">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-gold-500 font-extrabold text-xl tracking-widest uppercase">ARTITECT</div>
              <div className="text-steel-400 font-light text-xs tracking-[0.3em] uppercase">MACHINERY</div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              Precision-engineered sheet metal folding machines for industrial manufacturers worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
                { icon: Globe, label: 'Website', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-steel-600 hover:border-gold-500 flex items-center justify-center text-steel-400 hover:text-gold-500 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-steel-100 font-semibold text-sm tracking-widest uppercase mb-5">Products</h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Metal Folding Machine',
                'Metal Folder',
                'Sheet Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    onClick={(e) => { e.preventDefault(); scrollTo('#products'); }}
                    className="text-steel-400 hover:text-gold-500 text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-steel-100 font-semibold text-sm tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Features', href: '#features' },
                { label: 'Contact', href: '#contact' },
                { label: 'Request a Quote', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                    className="text-steel-400 hover:text-gold-500 text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-steel-100 font-semibold text-sm tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+18002784832" className="text-steel-400 hover:text-gold-500 text-sm transition-colors duration-200">
                  +1 (800) 278-4832
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:sales@artitectmachinery.com" className="text-steel-400 hover:text-gold-500 text-sm transition-colors duration-200">
                  sales@artitectmachinery.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-steel-400 text-sm">
                  142 Industrial Parkway,<br />Manufacturing District
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-600/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel-400 text-xs">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-steel-400 hover:text-gold-500 text-xs transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
