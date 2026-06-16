import { Linkedin, Twitter, Youtube } from 'lucide-react';

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
  Support: ['Technical Support', 'Spare Parts', 'Training', 'Documentation', 'Warranty'],
};

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-serif text-2xl font-bold text-gold tracking-wider block">
                ARTITECT
              </span>
              <span className="font-sans text-xs font-semibold text-white/60 tracking-[0.25em] uppercase">
                MACHINERY
              </span>
            </div>
            <p className="font-sans text-sm text-white/55 leading-relaxed mb-6 max-w-xs">
              Precision sheet metal folding machines engineered for performance, built for longevity. 
              Trusted by manufacturers in 80+ countries worldwide.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans text-xs font-semibold text-gold tracking-[0.25em] uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-white/55 hover:text-white transition-colors duration-200"
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
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            © {new Date().getFullYear()} ARTITECT MACHINERY GmbH. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Imprint'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
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
