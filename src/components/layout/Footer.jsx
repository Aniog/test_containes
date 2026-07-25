import { Zap, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';

const footerLinks = {
  Leagues: ['Premier League', 'La Liga', 'Bundesliga', 'Serie A', 'Ligue 1', 'Champions League'],
  Features: ['Live Scores', 'Match Highlights', 'Standings', 'Statistics', 'Transfers', 'Fantasy'],
  Company: ['About Us', 'Careers', 'Press', 'Contact', 'Privacy Policy', 'Terms of Service'],
};

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Facebook, label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-pitch-card border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-soccer-green rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-black text-xl tracking-tight">
                KICK<span className="text-soccer-green">OFF</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your ultimate destination for live football scores, match highlights, and breaking news from every corner of the beautiful game.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 bg-pitch-surface hover:bg-soccer-green rounded-lg flex items-center justify-center transition-colors border-0"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors no-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 KickOff. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-soccer-green rounded-full animate-pulse" />
            <span className="text-gray-500 text-xs font-semibold">Live data updated every 30 seconds</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
