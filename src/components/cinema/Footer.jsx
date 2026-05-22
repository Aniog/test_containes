import { Film, Instagram, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  Programme: ['Now Playing', 'Coming Soon', 'Special Events', 'Film Archive', 'Retrospectives'],
  Visit: ['Location & Hours', 'Accessibility', 'Parking', 'Private Hire', 'Gift Cards'],
  About: ['Our Story', 'The Team', 'Press', 'Careers', 'Contact'],
};

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-cinema-black border-t border-white/5">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 border border-cinema-white flex items-center justify-center">
                <Film className="w-3.5 h-3.5 text-cinema-white" />
              </div>
              <span className="font-display text-lg font-light tracking-[0.25em] uppercase text-cinema-white">
                Noir Cinema
              </span>
            </div>
            <p className="text-xs font-sans font-light text-cinema-silver leading-relaxed mb-8 max-w-xs">
              A sanctuary for the discerning film lover. Presenting the finest in classic, contemporary, and world cinema since 1924.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-cinema-smoke mb-3">
                Programme Updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-cinema-charcoal border border-white/10 text-cinema-white text-xs font-sans px-4 py-3 placeholder:text-cinema-silver focus:outline-none focus:border-white/30 transition-colors"
                />
                <button className="bg-cinema-white text-cinema-black text-[9px] font-sans font-semibold tracking-[0.15em] uppercase px-5 py-3 hover:bg-cinema-pearl transition-colors duration-200 flex-shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-cinema-white mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs font-sans font-light text-cinema-silver hover:text-cinema-white transition-colors duration-200"
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
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-sans text-cinema-silver tracking-wide">
            © 2026 Noir Cinema. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-cinema-silver hover:text-cinema-white transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] font-sans text-cinema-silver hover:text-cinema-white transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-[10px] font-sans text-cinema-silver hover:text-cinema-white transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-[10px] font-sans text-cinema-silver hover:text-cinema-white transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
