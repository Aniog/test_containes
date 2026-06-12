const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Our Story', 'Careers', 'News & Updates', 'Certifications'],
  Support: ['Technical Support', 'Spare Parts', 'Service Network', 'Documentation', 'Training'],
};

const Footer = () => {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy border-t border-surface/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <div className="text-gold font-bold text-2xl tracking-widest uppercase">ARTITECT</div>
              <div className="text-surface/50 text-xs tracking-[0.3em] uppercase font-light">MACHINERY</div>
            </div>
            <p className="text-surface/55 text-sm leading-relaxed mb-6 max-w-xs">
              Precision-engineered sheet metal folding machines for industrial and workshop applications.
              Trusted by fabricators in over 40 countries.
            </p>
            <div className="flex gap-3">
              {['ISO 9001', 'CE'].map((cert) => (
                <span key={cert} className="border border-gold/30 text-gold text-xs font-medium px-3 py-1.5">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-surface font-semibold text-sm uppercase tracking-wider mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#products"
                      onClick={(e) => { e.preventDefault(); scrollTo('#products'); }}
                      className="text-surface/50 text-sm hover:text-gold transition-colors duration-200"
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
      <div className="border-t border-surface/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-surface/40 text-xs">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-surface/40 text-xs hover:text-gold transition-colors">
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
