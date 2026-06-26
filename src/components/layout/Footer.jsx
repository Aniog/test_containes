import { Link } from 'react-router-dom';
import { Trophy, Globe } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#0a0e1a] border-t border-[#2a3550] mt-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#f5c518] flex items-center justify-center">
            <Trophy className="w-4 h-4 text-[#0a0e1a]" />
          </div>
          <div>
            <span className="text-white font-black text-sm">FIFA World Cup 2026™</span>
            <p className="text-slate-500 text-xs mt-0.5">USA · Canada · Mexico</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">首页</Link>
          <Link to="/matches" className="hover:text-slate-300 transition-colors">赛程</Link>
          <Link to="/groups" className="hover:text-slate-300 transition-colors">积分榜</Link>
          <Link to="/teams" className="hover:text-slate-300 transition-colors">球队</Link>
        </div>

        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <Globe className="w-3.5 h-3.5" />
          <span>June 11 – July 19, 2026</span>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-[#2a3550] text-center text-slate-600 text-xs">
        © 2026 FIFA World Cup™ Fan Site. All trademarks belong to their respective owners.
      </div>
    </div>
  </footer>
);

export default Footer;
