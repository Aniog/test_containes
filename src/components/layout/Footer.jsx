const Footer = () => {
  const year = new Date().getFullYear();

  const productLinks = [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folding Machine',
  ];

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Industries', href: '#industries' },
    { label: 'Features', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="about" className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <div className="font-heading font-bold text-white text-xl tracking-widest uppercase leading-none">
                ARTITECT
              </div>
              <div className="font-heading font-normal text-gold text-xs tracking-[0.35em] uppercase mt-0.5">
                MACHINERY
              </div>
            </div>
            <p className="font-body text-silver text-sm leading-relaxed max-w-sm mb-6">
              Precision-engineered sheet metal folding machines for the world's most demanding fabrication environments. Built to perform. Designed to last.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-gold text-xs tracking-widest uppercase">
                Precision Engineered. Perfectly Formed.
              </span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-white text-xs tracking-widest uppercase mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((name) => (
                <li key={name}>
                  <a
                    href="#products"
                    className="font-body text-silver text-sm hover:text-gold transition-colors duration-200"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white text-xs tracking-widest uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-silver text-sm hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-heading font-semibold text-white text-xs tracking-widest uppercase mb-4">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {['CE', 'ISO 9001', 'UL'].map((cert) => (
                  <span
                    key={cert}
                    className="border border-gold/40 text-gold text-xs font-heading font-semibold px-3 py-1 rounded-full tracking-wide"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-silver text-xs">
            © {year} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-silver text-xs hover:text-gold transition-colors"
              >
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
