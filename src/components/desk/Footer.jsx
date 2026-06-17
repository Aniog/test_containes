export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © 2026 办公桌购置指南. 保留所有权利。
        </p>
        <div className="flex gap-6">
          <a href="#why" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            为什么重要
          </a>
          <a href="#tips" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            选购要点
          </a>
          <a href="#products" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            推荐产品
          </a>
          <a href="#contact" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            联系我们
          </a>
        </div>
      </div>
    </footer>
  );
}
