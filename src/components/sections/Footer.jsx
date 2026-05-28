const stats = [
  { value: '20+', label: '年行业经验' },
  { value: '500+', label: '服务客户' },
  { value: '1200+', label: '完成项目' },
  { value: '38', label: '发明专利' },
];

const navLinks = [
  { label: '关于我们', href: '#about' },
  { label: '核心业务', href: '#services' },
  { label: '核心优势', href: '#advantages' },
  { label: '典型案例', href: '#cases' },
  { label: '联系我们', href: '#contact' },
];

const certs = ['ISO 9001:2015', 'IATF 16949:2016', 'AS9100D', '国家高新技术企业', '省级技术中心'];

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] text-gray-400 overflow-hidden relative">

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(26,58,107,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,107,0.18) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glowing horizontal accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E87722] to-transparent opacity-60" />
      </div>

      {/* Stats bar */}
      <div className="relative border-b border-[#1A3A6B]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 flex flex-col items-center gap-1 ${i < stats.length - 1 ? 'border-r border-[#1A3A6B]/50' : ''}`}
            >
              <span className="text-3xl font-bold text-[#E87722]" style={{ fontFamily: 'Inter, sans-serif' }}>{s.value}</span>
              <span className="text-xs text-gray-500 tracking-widest" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#E87722] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Noto Serif SC, serif' }}>威达</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'Noto Serif SC, serif' }}>
                  威达机械智造有限公司
                </div>
                <div className="text-[#E87722]/80 text-xs tracking-[0.2em] mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  WEIDA MACHINERY CO., LTD.
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-sm" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
              专注高端精密机械装备研发与制造，以智能化生产工艺为核心驱动力，
              为高端制造领域提供全生命周期解决方案。
            </p>

            {/* Cert tags */}
            <div className="flex flex-wrap gap-2">
              {certs.map((c) => (
                <span
                  key={c}
                  className="text-[10px] font-medium text-[#E87722]/80 border border-[#E87722]/25 bg-[#E87722]/5 px-2.5 py-1 tracking-wide"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-px bg-gradient-to-b from-transparent via-[#1A3A6B] to-transparent" />
          </div>

          {/* Nav + Contact */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10">

            {/* Navigation */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-4 h-px bg-[#E87722]" />
                <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  快速导航
                </h4>
              </div>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-[#E87722] transition-all duration-300 flex-shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-4 h-px bg-[#E87722]" />
                <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  联系方式
                </h4>
              </div>
              <ul className="space-y-4">
                {[
                  { label: 'TEL', value: '+86 (0512) 6888-8888' },
                  { label: 'EMAIL', value: 'business@weida-machinery.com' },
                  { label: 'ADDR', value: '苏州市工业园区星湖街328号' },
                  { label: 'TIME', value: '周一至周五 08:30–17:30' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span
                      className="text-[10px] font-bold text-[#E87722]/70 tracking-widest pt-0.5 w-10 flex-shrink-0"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm text-gray-400 leading-snug" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-[#1A3A6B]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
            © 2024 威达机械智造有限公司 版权所有
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-[#E87722]/50 rounded-full" />
            <p className="text-xs text-gray-600" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
              苏ICP备XXXXXXXX号 &nbsp;|&nbsp; 增值电信业务经营许可证：苏B2-XXXXXXXX
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
