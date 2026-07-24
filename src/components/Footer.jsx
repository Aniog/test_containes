import { Trophy } from 'lucide-react';

const links = {
  Leagues: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'],
  Features: ['Live Scores', 'Standings', 'Top Scorers', 'Fixtures', 'News'],
  Company: ['About Us', 'Careers', 'Press', 'Contact', 'Privacy Policy'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-black text-xl tracking-tight">
                KICK<span className="text-green-500">OFF</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your ultimate destination for live football scores, standings, and news from the world's top leagues.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{category}</h4>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 KickOff. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Built for football fans, by football fans.
          </p>
        </div>
      </div>
    </footer>
  );
}
