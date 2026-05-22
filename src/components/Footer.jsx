import { Flame, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="bg-dark text-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif font-bold text-2xl text-white">Forno</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
            Artisan bakery and wood-fired pizza crafted with love since 1999. Every bite tells a story.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Social media"
              >
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Quick Links</p>
          <ul className="flex flex-col gap-2.5">
            {['Home', 'About', 'Menu', 'Specials', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <p className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Hours</p>
          <ul className="flex flex-col gap-2.5 text-sm text-white/50">
            <li>Mon – Fri: 7AM – 9PM</li>
            <li>Saturday: 7AM – 10PM</li>
            <li>Sunday: 8AM – 8PM</li>
          </ul>
          <div className="mt-5 pt-5 border-t border-white/10">
            <p className="text-white/50 text-sm">42 Via della Farina</p>
            <p className="text-white/50 text-sm">Brooklyn, NY 11201</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">© 2026 Forno Bakery & Pizza. All rights reserved.</p>
        <p className="text-white/30 text-sm">Made with ❤️ and a very hot oven</p>
      </div>
    </div>
  </footer>
);

export default Footer;
