import { Mail, Phone, MapPin, Linkedin, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
    'Metal Folder',
  ],
  Company: ['About Us', 'Our Story', 'Careers', 'News & Updates', 'Certifications'],
  Support: ['Technical Support', 'Spare Parts', 'Training', 'Documentation', 'Warranty'],
};

const Footer = () => {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white">
      {/* CTA Banner */}
      <div className="bg-brand-accent">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-white text-xl md:text-2xl font-bold">
              Ready to upgrade your production line?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Speak with our engineering team today.
            </p>
          </div>
          <button
            onClick={() => scrollTo('#contact')}
            className="flex-shrink-0 bg-white text-brand-accent px-8 py-3 rounded-lg font-semibold text-sm hover:bg-brand-offwhite transition-colors"
          >
            Get a Free Quote
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="font-serif text-white font-bold text-2xl tracking-wide">ARTITECT</div>
              <div className="text-brand-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                MACHINERY
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Precision-engineered sheet metal folding machines trusted by fabricators worldwide. Built to last. Designed to perform.
            </p>

            {/* Contact snippets */}
            <div className="space-y-3">
              {[
                { icon: Phone, text: '+1 (800) 278-4832' },
                { icon: Mail, text: 'sales@artitectmachinery.com' },
                { icon: MapPin, text: 'Sheffield, United Kingdom' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-white/55 text-sm">
                  <Icon className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm tracking-wide mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (heading === 'Products') scrollTo('#products');
                        else if (heading === 'Company') scrollTo('#about');
                        else scrollTo('#contact');
                      }}
                      className="text-white/50 text-sm hover:text-brand-accent transition-colors"
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
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <span>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
