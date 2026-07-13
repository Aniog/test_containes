import { Linkedin, Twitter, Youtube, ArrowUp } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folding Machine',
    'Metal Folder',
    'Metal Folder Machine',
  ],
  Company: ['About Us', 'Our Story', 'Careers', 'News & Press', 'Certifications'],
  Support: ['Technical Support', 'Spare Parts', 'Documentation', 'Training', 'Warranty'],
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <div className="font-playfair font-bold text-2xl text-white tracking-widest">
                ARTITECT
              </div>
              <div className="font-inter font-light text-xs text-brand-accent tracking-[0.3em] uppercase mt-0.5">
                Machinery
              </div>
            </div>
            <p className="font-inter text-sm text-brand-mid leading-relaxed mb-6 max-w-xs">
              Precision-engineered sheet metal folding machines trusted by
              fabricators in over 40 countries. Built to last. Built to perform.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-200 text-brand-mid border-none cursor-pointer"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-inter font-semibold text-xs text-white uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                      className="font-inter text-sm text-brand-mid hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
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

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-brand-mid">
            © {new Date().getFullYear()} ARTITECT MACHINERY GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="font-inter text-xs text-brand-mid hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer p-0">
              Privacy Policy
            </button>
            <button className="font-inter text-xs text-brand-mid hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer p-0">
              Terms of Use
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center hover:bg-brand-accent transition-all duration-200 text-brand-accent hover:text-white border-none cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
