import { Trophy, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gold rounded-lg p-1.5">
                <Trophy className="w-5 h-5 text-navy" />
              </div>
              <span className="text-white font-extrabold text-xl">
                犬赛<span className="text-gold">联盟</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              中国专业驯犬赛事组织机构，致力于推广科学训犬文化，举办高水准竞技赛事，连接全国优秀驯犬师与爱犬人士。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速导航</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: '赛事日历', path: '/events' },
                { label: '选手风采', path: '/competitors' },
                { label: '报名参赛', path: '/register' },
                { label: '赛事规则', path: '/events' },
              ].map((item) => (
                <li key={item.path + item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>contact@dogchampion.cn</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>400-888-9999</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>北京市朝阳区国家体育场北路1号</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-500">
          © 2026 犬赛联盟. 保留所有权利. 专业驯犬赛事组织机构
        </div>
      </div>
    </footer>
  );
}
