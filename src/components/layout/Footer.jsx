import { TreePine, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#2c1a0e] text-[#e8d5b7]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#8b5e3c] rounded-full flex items-center justify-center">
                <TreePine className="w-5 h-5 text-[#fdf8f3]" />
              </div>
              <span className="text-xl font-bold text-[#f5e6c8]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                匠心木作
              </span>
            </div>
            <p className="text-sm text-[#b89a7a] leading-relaxed mb-6">
              每一件作品都承载着匠人的心血与热情，用天然木材诠释生活之美，让自然的温度融入您的每一天。
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'Youtube' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 bg-[#3d2b1f] hover:bg-[#8b5e3c] rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#e8d5b7]" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#f5e6c8] font-semibold mb-5 text-base" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              快速导航
            </h3>
            <ul className="space-y-3">
              {[
                { label: '首页', href: '#home' },
                { label: '全部产品', href: '#products' },
                { label: '产品分类', href: '#categories' },
                { label: '关于我们', href: '#about' },
                { label: '联系我们', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="text-sm text-[#b89a7a] hover:text-[#d4a96a] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-[#f5e6c8] font-semibold mb-5 text-base" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              产品分类
            </h3>
            <ul className="space-y-3">
              {['家居摆件', '餐厨用品', '文具收纳', '儿童玩具', '装饰挂件', '定制礼品'].map((cat) => (
                <li key={cat}>
                  <a
                    href="#products"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#products'); }}
                    className="text-sm text-[#b89a7a] hover:text-[#d4a96a] transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#f5e6c8] font-semibold mb-5 text-base" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              联系我们
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4a96a] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#b89a7a]">浙江省杭州市西湖区木艺坊 88 号</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4a96a] flex-shrink-0" />
                <span className="text-sm text-[#b89a7a]">400-888-6688</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4a96a] flex-shrink-0" />
                <span className="text-sm text-[#b89a7a]">hello@jiangxinmuzu.com</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-[#3d2b1f] rounded-xl">
              <p className="text-xs text-[#b89a7a] mb-3">订阅我们的新品资讯</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="您的邮箱"
                  className="flex-1 bg-[#2c1a0e] border border-[#5c3d2e] rounded-lg px-3 py-2 text-xs text-[#e8d5b7] placeholder-[#6b4423] focus:outline-none focus:border-[#d4a96a]"
                />
                <button className="bg-[#8b5e3c] hover:bg-[#6b4423] text-white text-xs px-3 py-2 rounded-lg transition-colors whitespace-nowrap">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3d2b1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6b4423]">
            © 2024 匠心木作. 保留所有权利.
          </p>
          <div className="flex gap-4">
            {['隐私政策', '服务条款', '退换货政策'].map((item) => (
              <a key={item} href="#" className="text-xs text-[#6b4423] hover:text-[#b89a7a] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
