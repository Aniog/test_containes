import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Engineering Team', 'Careers', 'News & Updates'],
  Support: ['Technical Documentation', 'Spare Parts', 'Service & Maintenance', 'Training Programs'],
};

const Footer = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Ready to upgrade your production line?
            </h3>
            <p className="text-white/50 text-sm">
              Speak with an ARTITECT engineer today.
            </p>
          </div>
          <button
            onClick={() => scrollTo('#contact')}
            className="flex-shrink-0 bg-gold hover:bg-yellow-400 text-navy font-bold px-8 py-3.5 rounded-full transition-colors duration-200"
          >
            Get a Free Quote
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-white font-bold text-xl tracking-widest uppercase block">
                ARTITECT
              </span>
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                MACHINERY
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Precision sheet metal folding machines engineered for industrial performance, built to last a lifetime.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-steel rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#products')}
                      className="text-white/50 hover:text-gold text-sm transition-colors duration-200 text-left"
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
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
