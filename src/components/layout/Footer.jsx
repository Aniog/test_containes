import { Link } from 'react-router-dom';
import { Gamepad2, Twitter, Youtube, Twitch, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f13] border-t border-[#2d2d3d] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                GameVault
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your ultimate destination for game deals, news, and the best gaming store online.
            </p>
            <div className="flex gap-3 mt-4">
              {[Twitter, Youtube, Twitch, Github].map((Icon, i) => (
                <button key={i} className="p-2 rounded-lg bg-[#1a1a24] text-slate-400 hover:text-slate-100 hover:bg-[#22222f] transition-colors">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              {['Home', 'Deals', 'News', 'Store'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase()}`} className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-wider">Platforms</h4>
            <ul className="space-y-2">
              {['Steam', 'Epic Games', 'Nintendo', 'PlayStation', 'Xbox'].map((p) => (
                <li key={p}>
                  <span className="text-slate-400 text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'FAQ'].map((item) => (
                <li key={item}>
                  <span className="text-slate-400 hover:text-violet-400 text-sm cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2d2d3d] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2026 GameVault. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Not affiliated with Steam, Epic, Nintendo, PlayStation, or Xbox.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
