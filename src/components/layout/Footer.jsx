import { Mail, Phone, MapPin, Linkedin, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folding Machine',
    'Metal Folder',
    'Metal Folder Machine',
  ],
  Company: ['About Us', 'Our History', 'Careers', 'News & Events', 'Certifications'],
  Support: ['Technical Documentation', 'Spare Parts', 'Service & Maintenance', 'Training', 'Contact Support'],
};

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080F18] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <div
                className="text-2xl font-bold tracking-widest uppercase text-[#C9A84C]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ARTITECT
              </div>
              <div className="text-xs tracking-[0.3em] uppercase text-white/40 font-light mt-0.5">
                MACHINERY
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Precision-engineered sheet metal folding machines trusted by
              fabricators in over 40 countries. Built to perform. Designed to last.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              {[
                { icon: Phone, text: '+49 711 123 4567', href: 'tel:+497111234567' },
                { icon: Mail, text: 'sales@artitect-machinery.com', href: 'mailto:sales@artitect-machinery.com' },
                { icon: MapPin, text: 'Stuttgart, Germany', href: null },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                    {item.href ? (
                      <a href={item.href} className="text-white/50 text-sm hover:text-[#C9A84C] transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-white/50 text-sm">{item.text}</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] text-white/50 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs tracking-widest uppercase text-white font-semibold mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection('#products')}
                      className="text-white/45 text-sm hover:text-[#C9A84C] transition-colors text-left"
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

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((item) => (
              <a key={item} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
