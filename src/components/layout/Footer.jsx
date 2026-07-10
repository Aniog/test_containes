import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel-900 border-t border-steel-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold-500 rounded flex items-center justify-center">
                <span className="text-steel-900 font-barlow font-bold text-sm">A</span>
              </div>
              <span className="font-barlow font-extrabold text-lg tracking-tight">
                <span className="text-gold-500">ARTITECT</span>
                <span className="text-steel-100"> MACHINERY</span>
              </span>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed max-w-sm mb-6">
              Precision-engineered sheet metal folding machines built for professionals who demand accuracy, durability, and efficiency in every fold.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full border border-steel-700 flex items-center justify-center text-steel-400 hover:text-gold-500 hover:border-gold-500 transition-all duration-200">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-steel-700 flex items-center justify-center text-steel-400 hover:text-gold-500 hover:border-gold-500 transition-all duration-200">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-barlow font-semibold text-steel-100 mb-4 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              {['#products', '#why-us', '#about', '#contact'].map((href, i) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    className="text-steel-400 hover:text-gold-500 text-sm transition-colors cursor-pointer"
                  >
                    {['Products', 'Why Choose Us', 'About Us', 'Contact'][i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-barlow font-semibold text-steel-100 mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-steel-400 text-sm">
                <Phone size={15} className="text-gold-500 mt-0.5 shrink-0" />
                <span>+1 (800) 278-4832</span>
              </li>
              <li className="flex items-start gap-3 text-steel-400 text-sm">
                <Mail size={15} className="text-gold-500 mt-0.5 shrink-0" />
                <span>info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3 text-steel-400 text-sm">
                <MapPin size={15} className="text-gold-500 mt-0.5 shrink-0" />
                <span>Industrial Park, Machinery District, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-steel-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-steel-400 text-sm">
            © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <p className="text-steel-400 text-sm">
            Precision Engineered. Perfectly Formed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
