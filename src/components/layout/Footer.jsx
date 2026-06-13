const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
    'Metal Folder',
  ],
  Company: ['About Us', 'Careers', 'News & Press', 'Sustainability', 'Partners'],
  Support: ['Technical Support', 'Spare Parts', 'Service Contracts', 'Training', 'Documentation'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Compliance'],
};

const Footer = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy border-t border-white/10">
      {/* CTA Banner */}
      <div className="bg-brand-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl md:text-3xl tracking-tight">
              Ready to upgrade your production?
            </h3>
            <p className="text-blue-100 text-sm mt-1">
              Speak with an applications engineer today — no obligation.
            </p>
          </div>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="flex-shrink-0 bg-white hover:bg-blue-50 text-brand-blue font-bold px-8 py-3.5 rounded-full transition-all text-sm"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="9" width="16" height="2.5" rx="1" fill="white"/>
                  <rect x="2" y="4" width="10" height="2.5" rx="1" fill="white" opacity="0.6"/>
                  <rect x="2" y="14" width="13" height="2.5" rx="1" fill="white" opacity="0.6"/>
                </svg>
              </div>
              <div>
                <span className="text-brand-white font-bold text-sm tracking-widest uppercase leading-none block">
                  Artitect
                </span>
                <span className="text-brand-sky text-xs tracking-widest uppercase font-medium leading-none block mt-0.5">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-brand-silver text-sm leading-relaxed mb-6 max-w-xs">
              Precision sheet metal folding machines trusted by fabricators in 60+ countries.
              Engineering excellence since 1999.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'YouTube', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-white/5 hover:bg-brand-blue border border-white/10 hover:border-brand-blue rounded-lg flex items-center justify-center transition-all"
                  aria-label={social}
                >
                  <span className="text-brand-silver text-xs font-bold">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-brand-white font-semibold text-xs uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-brand-silver hover:text-brand-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-silver text-xs">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-brand-silver/50 text-xs">ISO 9001 Certified</span>
            <span className="text-brand-silver/50 text-xs">CE Marked</span>
            <span className="text-brand-silver/50 text-xs">Made in Germany</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
