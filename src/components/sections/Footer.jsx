import { Gamepad2, Twitter, Youtube, MessageCircle } from 'lucide-react';

const footerLinks = {
  Store: ['New Releases', 'Top Sellers', 'Specials', 'Free to Play', 'Early Access'],
  Community: ['Workshop', 'Discussions', 'Market', 'Broadcasts', 'Reviews'],
  Support: ['Help Center', 'Steam Status', 'Refunds', 'Contact Us', 'Privacy Policy'],
  Company: ['About Valve', 'Jobs', 'Steamworks', 'Steam Deck', 'Press'],
};

export default function Footer() {
  return (
    <footer className="bg-[#2c1f14] border-t border-[#4a3020] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-[#f0ebe0] font-black text-xl mb-4">
              <Gamepad2 className="w-7 h-7 text-[#e8650a]" />
              SteamVault
            </div>
            <p className="text-[#a09080] text-sm leading-relaxed mb-5">
              Your gateway to the world's largest PC gaming platform.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Youtube, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-[#3a2a1a] border border-[#4a3020] rounded-lg flex items-center justify-center text-[#a09080] hover:text-[#f0ebe0] hover:border-[#e8650a] transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#f0ebe0] font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#a09080] hover:text-[#d4c4b0] text-sm transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#4a3020] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#a09080] text-xs text-center md:text-left">
            © 2025 SteamVault. This is a fan-made concept site. Steam and all related marks are trademarks of Valve Corporation.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-[#a09080] hover:text-[#d4c4b0] text-xs transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
