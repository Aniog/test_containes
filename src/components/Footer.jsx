const Footer = () => {
  return (
    <footer className="bg-[#0f1219] text-white/60 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#b8860b] rounded flex items-center justify-center">
              <span className="text-[#1a1f2e] font-bold text-lg">A</span>
            </div>
            <span className="text-white font-semibold">ARTITECT MACHINERY</span>
          </div>
          
          <div className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer