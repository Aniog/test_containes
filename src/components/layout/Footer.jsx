import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Our History', 'Careers', 'News & Press', 'Certifications'],
  Support: ['Technical Support', 'Spare Parts', 'Training', 'Documentation', 'Warranty'],
};

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:sales@artitectmachinery.com' },
];

const Footer = () => (
  <footer className="bg-navy-deep border-t border-slate-mid/40">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <div className="flex flex-col leading-none mb-5">
            <span className="font-serif font-bold text-2xl text-off-white tracking-widest uppercase">
              ARTITECT
            </span>
            <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase mt-0.5">
              MACHINERY
            </span>
          </div>
          <p className="text-light-gray text-sm leading-relaxed mb-6 max-w-xs">
            Precision sheet metal folding machines engineered for performance, reliability, and longevity. Trusted by fabricators in over 40 countries.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-steel-blue/60 border border-slate-mid/50 flex items-center justify-center text-light-gray hover:text-gold hover:border-gold/40 transition-all"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="text-off-white font-semibold text-sm tracking-widest uppercase mb-5">
              {category}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-light-gray text-sm hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-14 pt-8 border-t border-slate-mid/40 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-light-gray text-xs">
          © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-light-gray text-xs hover:text-gold transition-colors"
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
