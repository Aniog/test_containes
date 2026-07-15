const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folding Machine',
    'Custom Solutions',
  ],
  Company: ['About Us', 'Our Facility', 'Careers', 'News & Press', 'Certifications'],
  Support: ['Technical Documentation', 'Spare Parts', 'Service & Maintenance', 'Training', 'Contact Support'],
};

export default function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel border-t border-iron">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="mb-5">
              <div className="font-playfair font-bold text-2xl text-chalk tracking-wide">ARTITECT</div>
              <div className="font-inter text-xs text-gold tracking-[0.25em] uppercase mt-0.5">MACHINERY</div>
            </div>
            <p className="font-inter text-sm text-silver leading-relaxed mb-6">
              Precision sheet metal folding machines engineered for performance, built for longevity.
            </p>
            <div className="flex gap-3">
              {['in', 'yt', 'tw'].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 rounded-full bg-iron flex items-center justify-center cursor-pointer hover:bg-gold/20 transition-colors"
                >
                  <span className="font-inter text-xs text-silver uppercase">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-inter text-xs text-gold tracking-[0.25em] uppercase mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#contact')}
                      className="font-inter text-sm text-silver hover:text-chalk transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-iron mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-silver">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <button
                key={item}
                className="font-inter text-xs text-silver hover:text-chalk transition-colors bg-transparent border-none cursor-pointer p-0"
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
