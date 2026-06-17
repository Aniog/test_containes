const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#e8b86d] text-2xl font-bold tracking-tight">ERGO</span>
              <span className="text-white text-2xl font-light tracking-widest">SEAT</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              专注人体工学办公椅研发与制造，致力于为每一位职场人提供健康、舒适的工作体验。
            </p>
          </div>
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">产品</p>
            <ul className="space-y-2">
              {['ErgoSeat Pro X1', 'ErgoSeat Lite S2', 'ErgoSeat Exec E3', '配件与周边'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-white/60 hover:text-white text-sm transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">支持</p>
            <ul className="space-y-2">
              {['常见问题', '安装指南', '保修政策', '联系客服'].map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-white/60 hover:text-white text-sm transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2026 ErgoSeat. 保留所有权利。</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition">隐私政策</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
