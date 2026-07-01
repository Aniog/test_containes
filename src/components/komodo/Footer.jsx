import { Compass, Instagram, Facebook, Youtube, MapPin, Mail } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Explore',
    links: ['About Komodo', 'Top Attractions', 'Pink Beach', 'Padar Island', 'Diving & Snorkeling'],
  },
  {
    heading: 'Plan Your Trip',
    links: ['Best Time to Visit', 'Travel Tips', 'Getting There', 'Accommodation', 'Tour Operators'],
  },
  {
    heading: 'Resources',
    links: ['Park Entry Fees', 'Conservation Info', 'Local Culture', 'Photo Gallery', 'FAQ'],
  },
];

const Footer = () => (
  <footer className="bg-stone text-white">
    {/* Main Footer */}
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="w-6 h-6 text-coral" />
            <span className="font-serif font-bold text-xl text-white">Komodo</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Your guide to exploring the wild beauty of Komodo National Park — Indonesia's most extraordinary destination.
          </p>
          <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
            <MapPin className="w-4 h-4 text-coral flex-shrink-0" />
            <span>Labuan Bajo, East Nusa Tenggara, Indonesia</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Mail className="w-4 h-4 text-coral flex-shrink-0" />
            <span>hello@discoverkomodo.com</span>
          </div>
          {/* Social */}
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-coral flex items-center justify-center transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((col) => (
          <div key={col.heading}>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-4">{col.heading}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                    onClick={(e) => e.preventDefault()}
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
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/40 text-xs">
          © 2026 Discover Komodo. All rights reserved.
        </p>
        <p className="text-white/40 text-xs">
          Made with ♥ for adventurous travelers
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
