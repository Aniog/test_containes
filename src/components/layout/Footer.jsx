export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-brand-gold text-2xl">✦</span>
              <span className="font-serif font-bold text-xl text-white">梅露可家居用品有限公司</span>
            </div>
            <p className="font-sans text-white/60 text-sm leading-relaxed max-w-sm">
              用心甄选每一件好物，让家成为最温暖的港湾。
              梅露可，与您共同经营美好生活。
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-sans font-semibold text-white text-sm mb-4 tracking-wider">快速导航</h5>
            <ul className="space-y-2">
              {['首页', '产品系列', '品牌故事', '生活理念', '联系我们'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-white/60 text-sm hover:text-brand-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h5 className="font-sans font-semibold text-white text-sm mb-4 tracking-wider">客户服务</h5>
            <ul className="space-y-2">
              {['购买指南', '配送说明', '退换货政策', '质量保证', '常见问题'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-white/60 text-sm hover:text-brand-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/40 text-xs">
            © 2024 梅露可家居用品有限公司 版权所有
          </p>
          <p className="font-sans text-white/40 text-xs">
            苏ICP备XXXXXXXX号 | 苏公网安备XXXXXXXXXXXXXXXX号
          </p>
        </div>
      </div>
    </footer>
  );
}
