import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-amber-900/20 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gold text-2xl font-serif font-bold">∮</span>
              <span className="text-ivory font-serif font-semibold text-lg">菲尔兹奖</span>
            </div>
            <p className="text-ivory/50 text-sm leading-relaxed">
              菲尔兹奖是数学界的最高荣誉，每四年颁发一次，授予40岁以下做出杰出贡献的数学家。
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">快速导航</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: '首页' },
                { to: '/laureates', label: '获奖者名单' },
                { to: '/history', label: '历史沿革' },
                { to: '/medal', label: '奖章介绍' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-ivory/50 hover:text-gold text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">关于</h4>
            <p className="text-ivory/50 text-sm leading-relaxed">
              本网站致力于介绍菲尔兹奖的历史、获奖者及其数学成就，传播数学文化。
            </p>
            <p className="text-ivory/30 text-xs mt-4">
              数据来源：国际数学联盟（IMU）
            </p>
          </div>
        </div>

        <div className="border-t border-amber-900/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/30 text-xs">
            © 2024 菲尔兹奖专题网站 · 数学界的最高荣誉
          </p>
          <p className="text-ivory/30 text-xs font-serif italic">
            "Mathematics is the queen of sciences." — Carl Friedrich Gauss
          </p>
        </div>
      </div>
    </footer>
  );
}
