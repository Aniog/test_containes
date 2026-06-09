import { Mail, Phone, MapPin, Linkedin, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Careers', 'News & Press', 'Certifications', 'Partners'],
  Support: ['Technical Support', 'Spare Parts', 'Training', 'Documentation', 'Warranty'],
};

export default function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel-900 border-t border-steel-700/40">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-serif font-bold text-2xl text-white tracking-wide block">
                ARTITECT
              </span>
              <span className="text-gold-500 text-xs font-medium tracking-[0.25em] uppercase">
                MACHINERY
              </span>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-6 max-w-xs">
              Precision-engineered sheet metal folding machines trusted by
              manufacturers in over 40 countries. Built to perform. Built to last.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+18002784832" className="flex items-center gap-2 text-steel-400 hover:text-gold-400 text-sm transition-colors">
                <Phone className="w-4 h-4 text-gold-500" />
                +1 (800) 278-4832
              </a>
              <a href="mailto:sales@artitectmachinery.com" className="flex items-center gap-2 text-steel-400 hover:text-gold-400 text-sm transition-colors">
                <Mail className="w-4 h-4 text-gold-500" />
                sales@artitectmachinery.com
              </a>
              <div className="flex items-start gap-2 text-steel-400 text-sm">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                14 Industrial Park Drive, Detroit, MI 48201
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-steel-800 hover:bg-gold-500/20 border border-steel-700 hover:border-gold-500/40 flex items-center justify-center text-steel-400 hover:text-gold-400 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#contact')}
                      className="text-steel-400 hover:text-gold-400 text-sm transition-colors text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-steel-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel-500 text-xs">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-steel-500 hover:text-steel-300 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
