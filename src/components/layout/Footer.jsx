const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Sheet Metal Folder',
    'Metal Folding Machine',
    'Double Folder',
    'Metal Folder Machine',
    'Sheet Metal Folding Machine',
  ],
  Company: ['About Us', 'Why Choose Us', 'Careers', 'News & Updates'],
  Support: ['Technical Support', 'Spare Parts', 'Service & Maintenance', 'Documentation'],
};

const Footer = () => {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel-black border-t border-iron-gray">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <p className="font-playfair text-2xl font-bold text-off-white tracking-wide">ARTITECT</p>
              <p className="font-inter text-xs font-semibold tracking-[0.25em] text-gold uppercase mt-0.5">MACHINERY</p>
            </div>
            <p className="font-inter text-sm text-silver leading-relaxed mb-6 max-w-xs">
              Precision-engineered metal folding machines trusted by fabricators and manufacturers in over 40 countries worldwide.
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-inter text-sm text-platinum">
                <span className="text-silver">Email: </span>
                <a href="mailto:sales@artitectmachinery.com" className="hover:text-gold transition-colors">
                  sales@artitectmachinery.com
                </a>
              </p>
              <p className="font-inter text-sm text-platinum">
                <span className="text-silver">Phone: </span>
                <a href="tel:+18002784832" className="hover:text-gold transition-colors">
                  +1 (800) 278-4832
                </a>
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-inter text-xs font-semibold text-gold uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#products')}
                      className="font-inter text-sm text-silver hover:text-platinum transition-colors bg-transparent border-none p-0 text-left"
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
      <div className="border-t border-iron-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-silver">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <button
                key={item}
                className="font-inter text-xs text-silver hover:text-gold transition-colors bg-transparent border-none p-0"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
