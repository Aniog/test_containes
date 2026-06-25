import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white">
      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-brand-steel via-brand-gold to-brand-steel" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-brand-navy font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>A</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-base tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>ARTITECT</span>
                <span className="text-brand-gold text-xs tracking-widest uppercase font-medium">MACHINERY</span>
              </div>
            </div>
            <p className="text-brand-silver text-sm leading-relaxed mb-6">
              Engineering precision sheet metal folding solutions trusted by manufacturers worldwide. Quality, reliability, and innovation in every machine.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-brand-steel rounded-lg flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-200 text-brand-silver">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-brand-steel rounded-lg flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-200 text-brand-silver">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Products
            </h4>
            <ul className="space-y-3">
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
                  <button
                    onClick={() => handleNavClick('#products')}
                    className="text-brand-silver text-sm hover:text-brand-gold transition-colors duration-200 cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Features', href: '#features' },
                { label: 'Contact', href: '#contact' },
                { label: 'Get a Quote', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-brand-silver text-sm hover:text-brand-gold transition-colors duration-200 cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-brand-silver text-sm">+1 (800) 278-4832</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-brand-silver text-sm">info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-brand-silver text-sm">Industrial Park, Manufacturing District, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-steel flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-silver text-sm">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-brand-silver text-sm hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-brand-silver text-sm hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
