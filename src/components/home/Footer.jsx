import { Gamepad2, Twitter, Youtube, Twitch, Github } from 'lucide-react';

const PLATFORM_LINKS = [
  { name: 'Steam', href: 'https://store.steampowered.com', color: 'hover:text-[#66c0f4]' },
  { name: 'Epic Games', href: 'https://store.epicgames.com', color: 'hover:text-gray-200' },
  { name: 'Nintendo eShop', href: 'https://www.nintendo.com/store', color: 'hover:text-red-400' },
  { name: 'PlayStation Store', href: 'https://store.playstation.com', color: 'hover:text-blue-400' },
  { name: 'Xbox Store', href: 'https://www.xbox.com/games/store', color: 'hover:text-green-400' },
];

const SITE_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'News', href: '#news' },
  { label: 'Reviews', href: '#news' },
  { label: 'Deals', href: '#deals' },
  { label: 'Store', href: '#store' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-white">
                Game<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Hub</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your one-stop destination for gaming news, deals, and the best prices on games across all platforms.
            </p>
            <div className="flex gap-3">
              {[Twitter, Youtube, Twitch].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {SITE_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2">
              {PLATFORM_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noreferrer" className={`text-gray-500 text-sm transition-colors ${link.color}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-500 text-sm mb-4">Get the latest deals and news delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-600 text-sm px-3 py-2.5 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 GameHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
