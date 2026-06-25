import { Linkedin, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Our History', 'Careers', 'News & Events', 'Certifications'],
  Support: ['Technical Support', 'Spare Parts', 'Service & Maintenance', 'Documentation', 'Training'],
};

const Footer = () => (
  <footer className="bg-navy-deep border-t border-navy-light">
    {/* Main Footer */}
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <div className="flex flex-col leading-none mb-5">
            <span
              className="text-2xl font-bold tracking-widest text-off-white uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              ARTITECT
            </span>
            <span
              className="text-sm font-medium tracking-[0.3em] text-gold uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              MACHINERY
            </span>
          </div>
          <p
            className="text-slate-cool text-sm leading-relaxed mb-6 max-w-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Precision-engineered sheet metal folding machines trusted by fabricators in over 40 countries. Built to perform. Designed to last.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 bg-navy-mid border border-navy-light rounded-lg flex items-center justify-center text-slate-cool hover:text-gold hover:border-gold/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-navy-mid border border-navy-light rounded-lg flex items-center justify-center text-slate-cool hover:text-gold hover:border-gold/50 transition-all"
              aria-label="YouTube"
            >
              <Youtube size={16} />
            </a>
            <a
              href="mailto:sales@artitect-machinery.com"
              className="w-9 h-9 bg-navy-mid border border-navy-light rounded-lg flex items-center justify-center text-slate-cool hover:text-gold hover:border-gold/50 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4
              className="text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {category}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-cool hover:text-off-white transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
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
    <div className="border-t border-navy-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-xs text-slate-cool"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {['Privacy Policy', 'Terms of Use', 'Imprint'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-slate-cool hover:text-off-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
