import { Home, Heart } from 'lucide-react';

const footerLinks = [
  {
    title: '产品系列',
    links: ['客厅家居', '卧室用品', '厨房餐具', '浴室收纳', '户外阳台'],
  },
  {
    title: '关于我们',
    links: ['品牌故事', '设计理念', '可持续发展', '加入我们', '媒体报道'],
  },
  {
    title: '客户服务',
    links: ['购物指南', '配送说明', '退换货政策', '售后保障', '常见问题'],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#2C1810] text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#8B6F47] flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span
                className="font-bold text-xl text-white"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                由妮可家居
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              用心为每一个家庭甄选最温暖的家居好物，让生活充满爱与美好。
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {['微信', '微博', '小红书', '抖音'].map((platform) => (
                <button
                  key={platform}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8B6F47] transition-colors flex items-center justify-center text-xs text-white/70 hover:text-white"
                >
                  {platform[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4
                className="font-bold text-white mb-4 text-sm"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/55 hover:text-[#C4A882] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2024 由妮可家居用品有限公司 · 沪ICP备XXXXXXXX号
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            用
            <Heart className="w-3 h-3 text-[#8B6F47] fill-[#8B6F47]" />
            为每一个家打造
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
