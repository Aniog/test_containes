export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-800" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div
              className="text-2xl font-bold text-white mb-1"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              🐯 老虎公园
            </div>
            <p className="text-neutral-500 text-sm">守护自然，传承野性之美</p>
          </div>

          <div className="flex gap-8 text-sm text-neutral-500">
            <a href="#tigers" className="hover:text-amber-400 transition-colors">认识老虎</a>
            <a href="#visit" className="hover:text-amber-400 transition-colors">参观信息</a>
            <a href="#" className="hover:text-amber-400 transition-colors">保护项目</a>
            <a href="#" className="hover:text-amber-400 transition-colors">联系我们</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-900 text-center text-neutral-600 text-xs">
          © 2026 老虎公园 · 保留所有权利 · 致力于野生动物保护
        </div>
      </div>
    </footer>
  )
}
