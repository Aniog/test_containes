import { Ear, Heart } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Ear className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">听力健康</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              致力于提供专业、权威的听力健康知识，帮助每一个人守护珍贵的听觉世界。
            </p>
            <div className="mt-4 flex items-center gap-1 text-xs text-slate-500">
              <span>内容参考世界卫生组织（WHO）听力健康指南</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">快速导航</h4>
            <ul className="space-y-2">
              {[
                { label: '听力知识', href: '#knowledge' },
                { label: '风险自测', href: '#selftest' },
                { label: '保护建议', href: '#tips' },
                { label: '数据洞察', href: '#data' },
                { label: '常见问题', href: '#faq' },
                { label: '联系我们', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">相关资源</h4>
            <ul className="space-y-2">
              {[
                '世界卫生组织',
                '中国听力医学发展基金会',
                '全国爱耳日',
                '世界听力日',
                '听力损失预防指南',
              ].map((item) => (
                <li key={item}>
                  <span className="text-slate-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © 2026 听力健康专题网站. 本网站内容仅供参考，不构成医疗建议。
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <span>用</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>守护每一个声音</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
