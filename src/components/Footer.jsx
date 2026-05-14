import { Megaphone } from 'lucide-react';

const footerLinks = {
  服务: ['品牌策划', '创意设计', '整合营销', '数字营销', '影视制作', '数据分析'],
  公司: ['关于我们', '团队介绍', '荣誉资质', '新闻动态', '加入我们'],
  资源: ['成功案例', '行业洞察', '营销指南', '客户评价'],
};

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-amber flex items-center justify-center">
                <span className="text-white font-bold">秋</span>
              </div>
              <span className="text-white font-bold text-xl">
                秋易<span className="text-gold">广告</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              专注品牌策划与创意设计12年，为500+企业提供专业广告解决方案，
              让每一个品牌都能发出属于自己的声音。
            </p>
            <div className="flex gap-3">
              {['微信', '微博', '抖音', 'LinkedIn'].map((platform) => (
                <div
                  key={platform}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:border-gold/40 hover:text-gold transition-all cursor-pointer text-xs"
                >
                  {platform[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 秋易广告公司. 保留所有权利.
          </p>
          <div className="flex gap-6">
            {['隐私政策', '服务条款', '法律声明'].map((item) => (
              <a key={item} href="#" className="text-gray-600 text-sm hover:text-gold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
