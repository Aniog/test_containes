export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#1E5FA8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">罗</span>
              </div>
              <div>
                <div className="text-white font-bold text-base">罗科百道机械智造有限公司</div>
                <div className="text-[#8A9BB0] text-xs tracking-widest">LUOKE BAIDAO MECHANICAL MANUFACTURING</div>
              </div>
            </div>
            <p className="text-[#8A9BB0] text-sm leading-relaxed max-w-sm">
              深耕精密机械制造领域二十余年，以卓越工艺与严苛品控为核心，
              为全球高端制造客户提供可靠的定制化零部件解决方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">快速导航</h4>
            <ul className="space-y-3">
              {[
                ['关于我们', '#about'],
                ['核心业务', '#services'],
                ['产品中心', '#products'],
                ['制造实力', '#capability'],
                ['服务行业', '#industries'],
                ['联系我们', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-[#8A9BB0] hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">资质认证</h4>
            <ul className="space-y-3">
              {[
                'ISO 9001:2015',
                'AS9100D',
                'IATF 16949',
                'ISO 13485',
              ].map((cert) => (
                <li key={cert} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2E9CDB] rounded-full" />
                  <span className="text-[#8A9BB0] text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8A9BB0] text-xs">
            © 2024 罗科百道机械智造有限公司 版权所有
          </p>
          <p className="text-[#8A9BB0] text-xs">
            粤ICP备XXXXXXXX号 · 粤公网安备 44030XXXXXXXXX号
          </p>
        </div>
      </div>
    </footer>
  );
}
