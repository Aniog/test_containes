const footerLinks = [
  {
    title: '产品系列',
    links: ['寝室系列', '厨房系列', '客厅系列', '浴室系列', '收纳系列', '香氛系列'],
  },
  {
    title: '关于维纯',
    links: ['品牌故事', '企业文化', '社会责任', '加入我们', '合作伙伴'],
  },
  {
    title: '客户服务',
    links: ['购买指南', '配送说明', '退换政策', '售后服务', '常见问题'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏡</span>
              <div>
                <div className="text-xl font-serif font-bold text-white">维纯家居</div>
                <div className="text-xs text-white/60">用品有限公司</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              让每一个家，都充满爱的温度。维纯家居，专注为家庭提供高品质、有温度的家居用品，
              陪伴您和家人走过每一个美好时光。
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {['微信', '微博', '小红书', '抖音'].map((platform) => (
                <div
                  key={platform}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-xs text-white/70 hover:bg-[#8B6F47] hover:text-white transition-colors cursor-pointer"
                >
                  {platform[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-white mb-4 text-sm">{group.title}</h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 text-sm hover:text-[#C4714A] transition-colors no-underline"
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center md:text-left">
            © 2024 维纯家居用品有限公司 版权所有 | 沪ICP备XXXXXXXX号
          </p>
          <div className="flex gap-4">
            {['隐私政策', '服务条款', '网站地图'].map((item) => (
              <a key={item} href="#" className="text-white/50 text-xs hover:text-white/80 transition-colors no-underline">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
