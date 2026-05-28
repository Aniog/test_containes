export default function Footer() {
  return (
    <footer className="bg-[#060E1A] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#E87722] flex items-center justify-center">
                <span className="text-white font-bold text-sm">威达</span>
              </div>
              <div>
                <div className="text-white font-bold text-base" style={{ fontFamily: 'Noto Serif SC, serif' }}>
                  威达机械智造有限公司
                </div>
                <div className="text-[#E87722] text-xs tracking-widest">WEIDA MACHINERY CO., LTD.</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
              专注高端精密机械装备研发与制造，以智能化生产工艺为核心驱动力，
              为高端制造领域提供全生命周期解决方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>快速导航</h4>
            <ul className="space-y-2">
              {[
                { label: '关于我们', href: '#about' },
                { label: '核心业务', href: '#services' },
                { label: '核心优势', href: '#advantages' },
                { label: '典型案例', href: '#cases' },
                { label: '联系我们', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#E87722] transition-colors"
                    style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>资质认证</h4>
            <ul className="space-y-2">
              {[
                'ISO 9001:2015',
                'IATF 16949:2016',
                'AS9100D 航空质量',
                '国家高新技术企业',
                '省级企业技术中心',
              ].map((cert) => (
                <li key={cert} className="text-sm flex items-center gap-2" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                  <span className="w-1.5 h-1.5 bg-[#E87722] rounded-full flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1A3A6B]/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
            © 2024 威达机械智造有限公司 版权所有
          </p>
          <p className="text-xs" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
            苏ICP备XXXXXXXX号 | 增值电信业务经营许可证：苏B2-XXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}
