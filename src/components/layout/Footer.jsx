import { Linkedin, Twitter, Youtube, ArrowUpCircle } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Careers', 'News & Press', 'Certifications', 'Sustainability'],
  Support: ['Technical Documentation', 'Spare Parts', 'Service Network', 'Training Programs', 'FAQ'],
};

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-brand-navy text-brand-silver">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <span className="font-heading font-extrabold text-brand-white text-2xl tracking-wider block">
                ARTITECT
              </span>
              <span className="font-heading font-light text-brand-gold text-xs tracking-[0.3em] uppercase">
                MACHINERY
              </span>
            </div>
            <p className="font-body text-brand-silver/80 text-sm leading-relaxed mb-6 max-w-xs">
              Precision-engineered sheet metal folding machines trusted by fabricators in 80+ countries.
              Built to perform. Built to last.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 bg-brand-steel/30 rounded-lg flex items-center justify-center hover:bg-brand-gold/20 hover:text-brand-gold transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-bold text-brand-white text-sm tracking-wide mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (category === 'Products') {
                          document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="font-body text-brand-silver/70 text-sm hover:text-brand-gold transition-colors duration-200"
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

      {/* Bottom bar */}
      <div className="border-t border-brand-silver/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-brand-silver/50 text-xs">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-brand-silver/50 text-xs hover:text-brand-silver transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-brand-silver/50 text-xs hover:text-brand-silver transition-colors">
              Terms of Use
            </a>
            <button
              onClick={scrollToTop}
              className="text-brand-silver/50 hover:text-brand-gold transition-colors bg-transparent border-none cursor-pointer p-0"
              aria-label="Back to top"
            >
              <ArrowUpCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
