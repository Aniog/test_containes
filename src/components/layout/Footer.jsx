import { Linkedin, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Careers', 'News & Events', 'Certifications', 'Partners'],
  Support: ['Technical Support', 'Spare Parts', 'Service & Maintenance', 'Documentation', 'Training'],
};

const Footer = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy border-t border-brand-steel">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <p className="font-playfair font-bold text-brand-gold text-2xl tracking-wide">ARTITECT</p>
              <p className="font-inter text-brand-silver text-xs tracking-widest uppercase">MACHINERY</p>
            </div>
            <p className="font-inter text-brand-silver text-sm leading-relaxed mb-6 max-w-xs">
              Precision-engineered sheet metal folding machines trusted by fabricators
              in over 40 countries. Built to perform. Designed to last.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-brand-steel/50 border border-brand-steel hover:border-brand-gold hover:bg-brand-gold/10 rounded-sm flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} className="text-brand-silver hover:text-brand-gold" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-inter font-semibold text-brand-white text-xs uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (category === 'Products') scrollTo('#products');
                        else if (category === 'Company') scrollTo('#about');
                        else if (category === 'Support') scrollTo('#contact');
                      }}
                      className="font-inter text-brand-silver text-sm hover:text-brand-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-steel">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-brand-silver text-xs">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-inter text-brand-silver text-xs hover:text-brand-gold transition-colors duration-200"
              >
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
