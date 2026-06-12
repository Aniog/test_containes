const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Our Story', 'Careers', 'News & Updates'],
  Support: ['Technical Support', 'Spare Parts', 'Training', 'Documentation'],
};

export default function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy border-t border-brand-silver/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button onClick={() => scrollTo('#home')} className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand-gold rounded-sm flex items-center justify-center">
                <span className="text-brand-navy font-black text-sm">AM</span>
              </div>
              <div className="text-left">
                <span className="block text-brand-white font-extrabold text-base tracking-tight leading-none">
                  ARTITECT
                </span>
                <span className="block text-brand-gold text-xs font-semibold tracking-widest uppercase leading-none mt-0.5">
                  MACHINERY
                </span>
              </div>
            </button>
            <p className="text-brand-silver text-sm leading-relaxed max-w-xs mb-6">
              Precision-engineered sheet metal folding machines trusted by fabricators
              and manufacturers in over 40 countries worldwide.
            </p>
            <p className="text-brand-silver/60 text-xs">
              ISO 9001:2015 Certified Manufacturer
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-brand-white font-semibold text-sm tracking-widest uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#products')}
                      className="text-brand-silver hover:text-brand-gold text-sm transition-colors duration-200 text-left"
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
      <div className="border-t border-brand-silver/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-silver/60 text-xs">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <button
                key={item}
                className="text-brand-silver/60 hover:text-brand-silver text-xs transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
