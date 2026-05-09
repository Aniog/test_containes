import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">羽</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white leading-tight">羽动天下</div>
                <div className="text-xs text-gray-400 leading-tight">专业羽毛球装备</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              专注羽毛球装备15年，提供尤尼克斯、李宁等顶级品牌正品，为每一位球员提供专业装备支持。
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速导航</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: '首页' },
                { to: '/products', label: '全部商品' },
                { to: '/products?category=racket', label: '羽毛球拍' },
                { to: '/products?category=shoes', label: '运动鞋' },
                { to: '/about', label: '关于我们' },
                { to: '/contact', label: '联系我们' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="text-white font-semibold mb-4">客户服务</h3>
            <ul className="space-y-2 text-sm">
              {[
                '购物指南',
                '配送说明',
                '退换货政策',
                '售后服务',
                '常见问题',
                '会员权益',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white">400-888-8888</div>
                  <div className="text-gray-500 text-xs">周一至周日 9:00-21:00</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white">service@yudong.com</div>
                  <div className="text-gray-500 text-xs">24小时内回复</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <div className="text-white">北京市朝阳区体育馆路88号</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© 2024 羽动天下. 保留所有权利.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-gray-300 transition-colors">服务条款</a>
            <a href="#" className="hover:text-gray-300 transition-colors">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
