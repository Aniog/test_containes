import { Globe } from 'lucide-react';

const links = {
  '赛事': ['小组赛', '淘汰赛', '半决赛', '决赛', '赛程总览'],
  '数据': ['实时比分', '积分榜', '射手榜', '赛事统计', '历届冠军'],
  '关于': ['关于我们', '联系我们', '隐私政策', '使用条款', '加入我们'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-yellow-500/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-gray-950" />
              </div>
              <span className="text-white font-black text-xl tracking-tight">
                WORLD<span className="text-yellow-500">CUP</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              FIFA 世界杯 2026 官方资讯平台，全程追踪32支球队的精彩赛事，实时比分与深度报道。
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full">
              🏆 FIFA 世界杯 2026
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{category}</h4>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 WorldCup. 保留所有权利。
          </p>
          <p className="text-xs text-gray-700">
            为全球球迷打造，献给足球的热爱。
          </p>
        </div>
      </div>
    </footer>
  );
}
