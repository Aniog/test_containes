import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] border-t border-slate-700/50 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">台风专题</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              专注于台风科普、历史记录与防灾知识，帮助公众了解台风、应对台风。
            </p>
          </div>
          <div>
            <h3 className="text-[#48cae4] font-semibold mb-3">快速导航</h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: '首页' },
                { path: '/knowledge', label: '台风知识' },
                { path: '/history', label: '历史台风' },
                { path: '/safety', label: '防灾指南' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-[#48cae4] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#48cae4] font-semibold mb-3">数据来源</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>中国气象局</li>
              <li>国家台风预报中心</li>
              <li>联合台风警报中心 (JTWC)</li>
              <li>日本气象厅 (JMA)</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700/50 pt-6 text-center text-slate-500 text-sm">
          <p>© 2026 台风专题网站 · 数据仅供参考，请以官方气象部门发布为准</p>
        </div>
      </div>
    </footer>
  );
}
