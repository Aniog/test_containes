import { Link } from 'react-router-dom';
import { Trophy, Globe, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-950 border-t border-gray-800 mt-16">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 via-yellow-500 to-green-500 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-black text-sm">FIFA WORLD CUP 2026™</div>
              <div className="text-yellow-400 text-xs">美国 · 加拿大 · 墨西哥</div>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            2026年FIFA世界杯将在美国、加拿大和墨西哥三国联合举办，共48支球队参赛，104场精彩比赛。
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl">🇺🇸</span>
            <span className="text-2xl">🇨🇦</span>
            <span className="text-2xl">🇲🇽</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">快速导航</h4>
          <ul className="space-y-2">
            {[
              { to: '/matches', label: '赛程赛果' },
              { to: '/standings', label: '积分榜' },
              { to: '/teams', label: '球队信息' },
              { to: '/news', label: '最新新闻' },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">赛事信息</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <span>2026年6月11日 - 7月19日</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 text-gray-600 text-center">🏟</span>
              <span>16座比赛场馆</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 text-gray-600 text-center">⚽</span>
              <span>48支参赛球队</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 text-gray-600 text-center">🏆</span>
              <span>104场比赛</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-xs">
          © 2026 FIFA World Cup™ 信息网站. 仅供参考，非官方网站。
        </p>
        <div className="flex items-center gap-1 text-gray-600 text-xs">
          <span>Made with</span>
          <span className="text-red-500">❤</span>
          <span>for football fans</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
