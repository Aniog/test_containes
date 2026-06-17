const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#e8b86d] text-2xl font-bold tracking-tight">ERGO</span>
          <span className="text-white text-2xl font-light tracking-widest">SEAT</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/70 hover:text-white text-sm font-medium transition">特点</a>
          <a href="#products" className="text-white/70 hover:text-white text-sm font-medium transition">产品</a>
          <a href="#testimonials" className="text-white/70 hover:text-white text-sm font-medium transition">评价</a>
          <a href="#contact" className="text-white/70 hover:text-white text-sm font-medium transition">联系我们</a>
        </div>
        <a
          href="#products"
          className="bg-[#e8b86d] text-[#1a1a2e] font-semibold text-sm px-5 py-2 rounded-full hover:bg-[#d4a45a] transition"
        >
          立即选购
        </a>
      </div>
    </nav>
  )
}

export default Navbar
