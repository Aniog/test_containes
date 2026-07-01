import { Gamepad2, Twitter, Youtube, Twitch, MessageCircle, Mail, ArrowRight } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Steam Deals', href: '#deals' },
    { label: 'Epic Games', href: '#deals' },
    { label: 'Nintendo', href: '#deals' },
    { label: 'PlayStation', href: '#deals' },
    { label: 'Xbox', href: '#deals' },
  ],
  Content: [
    { label: 'Latest News', href: '#news' },
    { label: 'Game Reviews', href: '#news' },
    { label: 'Guides & Tips', href: '#news' },
    { label: 'Deal Alerts', href: '#deals' },
  ],
  Store: [
    { label: 'Browse Games', href: '#store' },
    { label: 'New Releases', href: '#store' },
    { label: 'Best Sellers', href: '#store' },
    { label: 'Coming Soon', href: '#store' },
  ],
};

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitch, label: 'Twitch', href: '#' },
  { icon: MessageCircle, label: 'Discord', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-game-surface border-t border-game-border">
      {/* Newsletter Banner */}
      <div className="bg-gradient-to-r from-game-purple/20 to-game-cyan/10 border-b border-game-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-game-text font-bold text-xl mb-1">Never Miss a Deal</h3>
              <p className="text-game-muted text-sm">Get the best gaming deals and news delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <div className="relative flex-1 md:w-72">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-game-dim" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-game-card border border-game-border text-game-text placeholder-game-dim text-sm pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:border-game-purple/60 transition-colors"
                />
              </div>
              <button className="flex items-center gap-2 bg-game-purple hover:bg-purple-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 flex-shrink-0">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-game-purple rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-game-text font-bold text-xl tracking-tight">
                0701 <span className="text-game-purple">Game</span>
              </span>
            </a>
            <p className="text-game-muted text-sm leading-relaxed mb-6 max-w-xs">
              Your one-stop destination for gaming deals, news, reviews, and a curated game store. Covering Steam, Epic, Nintendo, PlayStation, and Xbox.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-game-card border border-game-border rounded-lg flex items-center justify-center text-game-muted hover:text-game-text hover:border-game-purple/60 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-game-text font-semibold text-sm mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-game-muted hover:text-game-text text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-game-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-game-dim text-xs">
            © 2026 0701 Game Site. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-game-dim hover:text-game-muted text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
