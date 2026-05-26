import { Link } from 'react-router-dom';
import { Trophy, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <span className="text-red-400 font-extrabold text-lg">世界杯</span>
                <span className="text-white font-extrabold text-lg ml-1">周边</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              FIFA 2026 世界杯官方授权周边商品，为全球球迷提供最优质的收藏品和球迷用品。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">快速导航</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "首页" },
                { to: "/products", label: "全部商品" },
                { to: "/products?category=jersey", label: "球衣" },
                { to: "/products?category=ball", label: "足球" },
                { to: "/products?category=collectible", label: "收藏品" },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-white mb-4">客户服务</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">退换货政策</li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">配送说明</li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">常见问题</li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">真品保证</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                support@worldcup2026.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                400-2026-FIFA
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0" />
                美国 · 加拿大 · 墨西哥
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 世界杯周边商城. 保留所有权利.</p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-xs">🇺🇸 USA</span>
            <span className="text-gray-500 text-xs">🇨🇦 Canada</span>
            <span className="text-gray-500 text-xs">🇲🇽 Mexico</span>
            <span className="text-yellow-400 text-xs font-bold">FIFA 2026™</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
