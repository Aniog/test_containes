export default function Footer() {
  return (
    <footer className="bg-rugby-dark border-t border-rugby-gold/20 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-rugby-gold font-extrabold text-xl tracking-wide mb-1">AB橄榄球CD</div>
            <div className="text-gray-500 text-sm">力量 · 速度 · 团队精神</div>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            {['首页', '关于球队', '球队阵容', '赛程', '新闻', '联系我们'].map((item, i) => {
              const hrefs = ['#hero', '#about', '#team', '#schedule', '#news', '#contact'];
              return (
                <a key={item} href={hrefs[i]} className="hover:text-rugby-gold transition-colors">
                  {item}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
          © 2026 AB橄榄球CD. 保留所有权利。
        </div>
      </div>
    </footer>
  );
}
