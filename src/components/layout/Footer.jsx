const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gold rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-navy font-black text-sm tracking-tighter">AM</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-widest uppercase">Artitect</span>
                <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">Machinery</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Precision-engineered sheet metal folding machines trusted by fabricators in over 40 countries. Built to perform. Built to last.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'YouTube', 'Twitter'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-steel rounded-lg flex items-center justify-center text-white/60 hover:text-white text-xs font-bold transition-all duration-200"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-gold mb-5">Products</h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo('#products')}
                    className="text-white/55 hover:text-white text-sm transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Contact', href: '#contact' },
                { label: 'Get a Quote', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-white/55 hover:text-white text-sm transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © {year} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map((item) => (
              <a key={item} href="#" className="text-white/35 hover:text-white/70 text-xs transition-colors">
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
