import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folding Machine',
    'Custom Solutions',
  ],
  Company: ['About Us', 'Our Story', 'Careers', 'News & Press', 'Certifications'],
  Support: ['Documentation', 'Spare Parts', 'Service Network', 'Training', 'Contact Support'],
};

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:sales@artitectmachinery.com' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-sm bg-[#C8922A] flex items-center justify-center">
                <span className="text-white font-bold text-sm font-heading">AM</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-heading font-bold text-base tracking-widest uppercase">
                  Artitect
                </span>
                <span className="text-[#C8922A] font-heading font-medium text-xs tracking-[0.2em] uppercase">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Precision-engineered sheet metal folding machines trusted by fabricators in 40+ countries. Built to perform. Designed to last.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1E6FA5] flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4 text-gray-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-heading font-semibold text-xs uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
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
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
