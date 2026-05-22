import { Globe, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#060a14] border-t border-gray-800 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 via-amber-400 to-blue-500 flex items-center justify-center text-white font-black">
                26
              </div>
              <div>
                <p className="text-white font-black text-xl">FIFA 世界杯 2026™</p>
                <p className="text-slate-500 text-xs">美国 · 加拿大 · 墨西哥</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              2026年FIFA世界杯将于6月11日至7月19日在北美三国举行，
              这是足球史上规模最大的一届世界杯，48支球队共同角逐最高荣誉。
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Globe, label: 'Website' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-gray-700 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">快速导航</h4>
            <ul className="space-y-3">
              {[
                { label: '赛事概览', href: '#about' },
                { label: '主办国家', href: '#countries' },
                { label: '举办城市', href: '#cities' },
                { label: '赛事数据', href: '#stats' },
                { label: '赛程安排', href: '#schedule' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key dates */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">重要日期</h4>
            <ul className="space-y-3">
              {[
                { date: '6月11日', event: '揭幕战' },
                { date: '7月3日', event: '淘汰赛开始' },
                { date: '7月14日', event: '半决赛' },
                { date: '7月18日', event: '季军赛' },
                { date: '7月19日', event: '🏆 决赛' },
              ].map((item) => (
                <li key={item.date} className="flex items-center gap-3">
                  <span className="text-amber-400 text-xs font-semibold w-14 flex-shrink-0">{item.date}</span>
                  <span className="text-slate-400 text-sm">{item.event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 FIFA World Cup™ 信息展示网站 · 仅供参考
          </p>
          <div className="flex items-center gap-2">
            <span className="text-slate-600 text-xs">主办国：</span>
            <span className="text-lg">🇺🇸</span>
            <span className="text-lg">🇨🇦</span>
            <span className="text-lg">🇲🇽</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
