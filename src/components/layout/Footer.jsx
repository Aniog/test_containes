export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-text-main text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-brand-orange flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">金</span>
              </div>
              <div>
                <p className="text-white font-bold text-base">金利厨具用品有限公司</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              专注家庭厨房用品二十余年，以匠心工艺守护每个家庭的一日三餐，
              让厨房成为家中最温暖的角落。
            </p>
            <p className="text-white/40 text-xs mt-4">
              粤ICP备XXXXXXXX号 | © 2024 金利厨具用品有限公司
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速导航</h4>
            <ul className="space-y-2">
              {[
                { label: '首页', href: '#hero' },
                { label: '产品系列', href: '#products' },
                { label: '品牌故事', href: '#about' },
                { label: '服务承诺', href: '#services' },
                { label: '联系我们', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-white/60 hover:text-brand-orange text-sm transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>📞 400-888-6688</li>
              <li>✉️ service@jinli-kitchen.com</li>
              <li>📍 广东省佛山市顺德区</li>
              <li>🕐 周一至周六 9:00-18:00</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-white/40 text-xs">
          让每一顿饭都充满爱的味道 · 金利厨具，家的好帮手
        </p>
      </div>
    </footer>
  );
}
