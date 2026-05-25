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
    <footer className="bg-[#6B4C35]" style={{ background: 'linear-gradient(135deg, #7A5540 0%, #5C3D28 60%, #4A2E1A 100%)' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-10">

        {/* Top: Brand + Tagline centered */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-3xl">🏡</span>
            <div className="text-left">
              <div className="text-2xl font-serif font-bold text-[#F5E6D3]">维纯家居</div>
              <div className="text-xs text-[#C4A882]">用品有限公司</div>
            </div>
          </div>
          <p className="text-[#C4A882] text-sm leading-relaxed max-w-md mx-auto mt-2">
            让每一个家，都充满爱的温度。<br />
            陪伴您和家人走过每一个平凡而珍贵的日子。
          </p>
          {/* Social Icons */}
          <div className="flex justify-center gap-3 mt-5">
            {['微信', '微博', '小红书', '抖音'].map((platform) => (
              <div
                key={platform}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs text-[#C4A882] hover:text-[#F5E6D3] transition-colors cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                {platform[0]}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#C4A882]/20 mb-10" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-[#F5E6D3] mb-4 text-sm tracking-wide">{group.title}</h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#C4A882] text-sm hover:text-[#F5E6D3] transition-colors no-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C4A882]/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#C4A882]/70 text-xs text-center md:text-left">
            © 2026 维纯家居用品有限公司 版权所有 &nbsp;|&nbsp; 沪ICP备XXXXXXXX号
          </p>
          <div className="flex gap-5">
            {['隐私政策', '服务条款', '网站地图'].map((item) => (
              <a key={item} href="#" className="text-[#C4A882]/70 text-xs hover:text-[#F5E6D3] transition-colors no-underline">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
