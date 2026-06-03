import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const BakeryFooter = () => {
  return (
    <footer id="contact" className="bg-brown-dark text-warm-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-playfair font-bold text-warm-white">La Maison</span>
            <span className="text-amber text-xl">✦</span>
          </div>
          <p className="text-warm-white/70 text-sm leading-relaxed mb-5">
            Artisan baked goods crafted with love, local ingredients, and time-honored
            recipes since 1987.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="bg-warm-white/10 hover:bg-amber transition-colors rounded-full p-2"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="bg-warm-white/10 hover:bg-amber transition-colors rounded-full p-2"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-playfair font-semibold text-lg mb-4 text-warm-white">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm text-warm-white/70">
            {['Home', 'Menu', 'Articles', 'About', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-amber-light transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-playfair font-semibold text-lg mb-4 text-warm-white">Opening Hours</h4>
          <ul className="flex flex-col gap-2 text-sm text-warm-white/70">
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 text-amber shrink-0" />
              <div>
                <p className="text-warm-white font-medium">Mon – Fri</p>
                <p>7:00 AM – 7:00 PM</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 text-amber shrink-0" />
              <div>
                <p className="text-warm-white font-medium">Saturday</p>
                <p>7:00 AM – 8:00 PM</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 text-amber shrink-0" />
              <div>
                <p className="text-warm-white font-medium">Sunday</p>
                <p>8:00 AM – 5:00 PM</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-playfair font-semibold text-lg mb-4 text-warm-white">Contact Us</h4>
          <ul className="flex flex-col gap-3 text-sm text-warm-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-amber shrink-0" />
              <span>42 Rue de la Paix, Downtown District</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber shrink-0" />
              <span>+1 (555) 234-5678</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber shrink-0" />
              <span>hello@lamaisonbakery.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-white/10 px-6 md:px-12 py-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-warm-white/50 text-xs">
          <p>© 2026 La Maison Bakery. All rights reserved.</p>
          <p>Made with ✦ and a lot of butter.</p>
        </div>
      </div>
    </footer>
  );
};

export default BakeryFooter;
