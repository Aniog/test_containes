const Footer = () => {
  return (
    <footer className="bg-[#0f3d25] text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="font-bold text-xl tracking-wide">Animal World</span>
            </div>
            <p className="text-white/65 text-sm leading-relaxed">
              Celebrating the incredible diversity of life on Earth and inspiring the next generation of wildlife advocates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-amber-400 uppercase tracking-widest text-xs mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#categories" className="hover:text-white transition-colors">Animal Categories</a></li>
              <li><a href="#featured" className="hover:text-white transition-colors">Featured Animals</a></li>
              <li><a href="#facts" className="hover:text-white transition-colors">Fun Facts</a></li>
              <li><a href="#conservation" className="hover:text-white transition-colors">Conservation</a></li>
            </ul>
          </div>

          {/* Conservation */}
          <div>
            <h4 className="font-semibold text-amber-400 uppercase tracking-widest text-xs mb-4">
              Take Action
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><span className="hover:text-white transition-colors cursor-pointer">Support WWF</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Adopt an Animal</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Reduce Plastic Use</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Plant Native Trees</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © 2026 Animal World. Made with ❤️ for wildlife.
          </p>
          <p className="text-white/40 text-xs">
            Protecting biodiversity for future generations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
