import { Linkedin, Twitter, Youtube, ArrowUp } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Our History', 'Careers', 'News & Press', 'Sustainability'],
  Support: ['Technical Documentation', 'Spare Parts', 'Service & Maintenance', 'Training', 'Contact Support'],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#080F18] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="text-[#C9A84C] font-bold text-2xl tracking-widest uppercase">
                ARTITECT
              </div>
              <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-light">
                MACHINERY
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Precision sheet metal folding machines engineered for professionals.
              Trusted by fabricators in 40+ countries since 1999.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-[#C9A84C] rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-200"
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
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} ARTITECT MACHINERY GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors duration-200">
              Terms of Use
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-[#C9A84C]/20 hover:bg-[#C9A84C] rounded-full flex items-center justify-center transition-colors duration-200 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#C9A84C] group-hover:text-[#0F1C2E]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
