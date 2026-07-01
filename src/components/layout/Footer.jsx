import { Heart } from 'lucide-react';

const footerLinks = {
  产品: ['护肤系列', '彩妆系列', '香氛系列', '限定礼盒'],
  关于: ['品牌故事', '团队介绍', '可持续发展', '新闻中心'],
  支持: ['常见问题', '配送说明', '退换政策', '联系客服'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-pink-400 font-bold text-xl">
              <Heart className="w-6 h-6 fill-pink-400" />
              <span className="text-white">Blossom</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              用粉色的温柔与热情，陪伴您走过每一个美好时刻。
            </p>
            <div className="flex gap-3 mt-2">
              {['微博', '微信', '小红书', 'TikTok'].map((platform) => (
                <button
                  key={platform}
                  className="w-9 h-9 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center text-xs text-gray-400 hover:text-white transition-all duration-200"
                >
                  {platform[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div>
            <p className="font-semibold text-white">订阅我们的通讯</p>
            <p className="text-gray-400 text-sm">第一时间获取新品资讯与专属优惠</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="输入您的邮箱"
              className="flex-1 md:w-64 bg-gray-700 border border-gray-600 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 whitespace-nowrap">
              订阅
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Blossom. 保留所有权利。</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-400 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-pink-400 transition-colors">服务条款</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Cookie 设置</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
