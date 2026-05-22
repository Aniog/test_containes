import { Link } from 'react-router-dom';
import { Gamepad2, Twitter, Youtube, Twitch, Github } from 'lucide-react';

const footerLinks = {
  Explore: [
    { label: 'Home', to: '/' },
    { label: 'News & Articles', to: '/news' },
    { label: 'Game Deals', to: '/deals' },
    { label: 'Store', to: '/store' },
  ],
  Platforms: [
    { label: 'Steam Deals', to: '/deals?platform=steam' },
    { label: 'Epic Games', to: '/deals?platform=epic' },
    { label: 'Nintendo', to: '/deals?platform=nintendo' },
    { label: 'PlayStation', to: '/deals?platform=playstation' },
    { label: 'Xbox', to: '/deals?platform=xbox' },
  ],
  Company: [
    { label: 'About Us', to: '#' },
    { label: 'Contact', to: '#' },
    { label: 'Privacy Policy', to: '#' },
    { label: 'Terms of Service', to: '#' },
  ],
};

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitch, href: '#', label: 'Twitch' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-[#16161d] border-t border-[#2a2a3a] mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                GameVault
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your ultimate destination for game deals, news, and reviews across all major platforms.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-[#1e1e2a] border border-[#2a2a3a] rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#2a2a3a] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 GameVault. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Not affiliated with Steam, Epic Games, Nintendo, PlayStation, or Xbox.
          </p>
        </div>
      </div>
    </footer>
  );
}
