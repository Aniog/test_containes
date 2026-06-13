const Footer = () => {
  return (
    <footer className="bg-brand-navy pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-navy" fill="currentColor">
                  <path d="M3 3h8v2H5v14h14v-6h2v8H3V3zm18 0v8h-2V5h-6V3h8z" />
                  <path d="M12 10l4 4-4 4-1.4-1.4L13.2 14H10v-2h3.2l-1.6-1.6L12 10z" />
                </svg>
              </div>
              <div>
                <span className="text-brand-white font-bold text-lg tracking-wide">ARTITECT</span>
                <span className="text-brand-gold font-bold text-lg tracking-wide ml-1">MACHINERY</span>
              </div>
            </div>
            <p className="text-brand-white/40 text-sm leading-relaxed max-w-xs">
              Precision metal folding machines engineered for professionals who demand the best.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-brand-white font-semibold text-sm tracking-wide mb-5">Products</h4>
            <ul className="space-y-3">
              {['Double Folder Pro', 'Sheet Metal Folder X', 'Metal Folder Compact', 'Custom Solutions'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-brand-white/40 hover:text-brand-gold text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-brand-white font-semibold text-sm tracking-wide mb-5">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Story', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#about" className="text-brand-white/40 hover:text-brand-gold text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-brand-white font-semibold text-sm tracking-wide mb-5">Support</h4>
            <ul className="space-y-3">
              {['Technical Support', 'Documentation', 'Warranty Info', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-brand-white/40 hover:text-brand-gold text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.07] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-white/30 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-white/30 hover:text-brand-gold text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-brand-white/30 hover:text-brand-gold text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
