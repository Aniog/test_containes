import { Cake, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#3d2b1f] text-white py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Cake className="w-7 h-7 text-rose-300" />
            <span className="font-playfair text-2xl font-bold text-white">La Douceur</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Artisan cakes baked with love, using only the finest natural ingredients. Every slice tells a story.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-rose-400 rounded-full flex items-center justify-center transition-colors duration-200">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-rose-400 rounded-full flex items-center justify-center transition-colors duration-200">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-rose-400 rounded-full flex items-center justify-center transition-colors duration-200">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-playfair text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {['Home', 'Our Cakes', 'About', 'Testimonials', 'Order'].map((link) => (
              <li key={link}>
                <button
                  onClick={() => document.getElementById(link.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-rose-300 text-sm transition-colors duration-200"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-playfair text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/70 text-sm">
              <MapPin className="w-4 h-4 text-rose-300 mt-0.5 flex-shrink-0" />
              <span>24 Rue de la Pâtisserie,<br />Paris, France 75001</span>
            </li>
            <li className="flex items-center gap-3 text-white/70 text-sm">
              <Phone className="w-4 h-4 text-rose-300 flex-shrink-0" />
              <span>+33 1 23 45 67 89</span>
            </li>
            <li className="flex items-center gap-3 text-white/70 text-sm">
              <Mail className="w-4 h-4 text-rose-300 flex-shrink-0" />
              <span>hello@ladouceur.com</span>
            </li>
          </ul>
          <div className="mt-6 text-white/70 text-sm">
            <p className="font-semibold text-white mb-1">Opening Hours</p>
            <p>Tue–Sat: 8:00 AM – 6:00 PM</p>
            <p>Sun: 9:00 AM – 3:00 PM</p>
            <p>Mon: Closed</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
        <p>© 2026 La Douceur Artisan Bakery. All rights reserved. Made with ♥ and butter.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
