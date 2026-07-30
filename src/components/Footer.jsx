import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
];

const links = [
  { label: 'Products', href: '#flavors' },
  { label: 'Our Story', href: '#story' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <span className="text-4xl font-black text-sprite-green font-poppins tracking-tight">
              SPRITE
            </span>
            <p className="text-gray-400 mt-3 max-w-xs font-poppins text-sm leading-relaxed">
              The world's #1 lemon-lime soda. Crisp, clean, and refreshing since 1961.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sprite-green transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 font-poppins">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-sprite-lime transition-colors text-sm font-poppins"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 font-poppins">
              Stay Refreshed
            </p>
            <p className="text-gray-400 text-sm mb-4 font-poppins max-w-xs">
              Get the latest Sprite news, flavors, and promotions delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sprite-green font-poppins"
              />
              <button
                type="submit"
                className="bg-sprite-green text-white rounded-full px-5 py-2 text-sm font-bold hover:bg-sprite-lime transition-colors font-poppins"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-poppins">
            © {new Date().getFullYear()} The Coca-Cola Company. Sprite® is a registered trademark.
          </p>
          <p className="text-gray-600 text-xs font-poppins">
            Drink Responsibly. Stay Hydrated.
          </p>
        </div>
      </div>
    </footer>
  );
}
