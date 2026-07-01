import { Instagram, Facebook, Twitter } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Specials', href: '#specials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-playfair text-2xl font-bold text-ember mb-3">Forno & Co.</p>
            <p className="font-inter text-sm text-white/60 leading-relaxed max-w-xs">
              Artisan pizza and bakery crafted with heritage grains, seasonal produce,
              and a wood-fired oven since 1987.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-inter text-xs uppercase tracking-widest text-white/40 mb-4">Navigation</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-inter text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-inter text-xs uppercase tracking-widest text-white/40 mb-4">Follow Us</p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="font-inter text-sm text-white/60 mt-4">@fornoandco</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-inter text-xs text-white/40">
            © {new Date().getFullYear()} Forno & Co. All rights reserved.
          </p>
          <p className="font-inter text-xs text-white/40">
            Made with ❤️ and a very hot oven.
          </p>
        </div>
      </div>
    </footer>
  );
}
