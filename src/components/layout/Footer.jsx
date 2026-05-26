import { Gamepad2, Twitter, Youtube, Twitch, Github } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#0d0d14] border-t border-[#2a2a3e] mt-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              GameHub
            </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Your ultimate destination for gaming news, deals, and the best titles across all platforms.
          </p>
          <div className="flex gap-3 mt-4">
            {[Twitter, Youtube, Twitch, Github].map((Icon, i) => (
              <button key={i} className="w-8 h-8 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e] flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500 transition-all">
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Platforms</h4>
          <ul className="space-y-2">
            {['Steam Deals', 'Epic Games', 'Nintendo eShop', 'PlayStation Store', 'Xbox Store'].map((item) => (
              <li key={item}>
                <a href="#deals" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Content</h4>
          <ul className="space-y-2">
            {['Latest News', 'Game Reviews', 'Guides & Tips', 'Announcements', 'Blog'].map((item) => (
              <li key={item}>
                <a href="#news" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Store</h4>
          <ul className="space-y-2">
            {['Browse Games', 'On Sale', 'New Releases', 'Top Rated', 'My Library'].map((item) => (
              <li key={item}>
                <a href="#store" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#2a2a3e] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-gray-600 text-xs">© 2026 GameHub. All rights reserved.</p>
        <div className="flex gap-4">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
