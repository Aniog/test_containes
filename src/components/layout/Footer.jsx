import { Trophy, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a0e1a] border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#f5a623] to-[#e09415] rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-white font-black text-sm">FIFA WORLD CUP</div>
                <div className="text-[#f5a623] text-xs font-bold">2026</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              2026年FIFA世界杯将在美国、加拿大和墨西哥三国联合举办，共48支球队参赛，104场精彩比赛。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">快速导航</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: '首页' },
                { to: '/matches', label: '赛程安排' },
                { to: '/groups', label: '小组赛积分' },
                { to: '/players', label: '球星阵容' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-[#f5a623] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Host Countries */}
          <div>
            <h3 className="text-white font-bold mb-4">举办国</h3>
            <div className="space-y-3">
              {[
                { flag: '🇺🇸', name: '美国', cities: '11座城市' },
                { flag: '🇨🇦', name: '加拿大', cities: '2座城市' },
                { flag: '🇲🇽', name: '墨西哥', cities: '3座城市' },
              ].map((country) => (
                <div key={country.name} className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <div className="text-white text-sm font-semibold">{country.name}</div>
                    <div className="text-gray-400 text-xs">{country.cities}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 FIFA World Cup 专题网站 · 数据仅供参考
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Globe className="w-4 h-4" />
            <span>USA · Canada · Mexico</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
