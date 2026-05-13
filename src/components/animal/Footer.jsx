const Footer = () => (
  <footer className="bg-[#0f1f0f] text-white py-12 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🐾</span>
          <div>
            <div className="text-xl font-bold">Animal Kingdom</div>
            <div className="text-white/50 text-sm">Celebrating life on Earth</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm font-medium">
          <a href="#animals" className="hover:text-[#e9c46a] transition-colors">Animals</a>
          <a href="#facts" className="hover:text-[#e9c46a] transition-colors">Fun Facts</a>
          <a href="#habitats" className="hover:text-[#e9c46a] transition-colors">Habitats</a>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 Animal Kingdom. Dedicated to wildlife conservation and education.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>🌍</span>
            <span>Protecting biodiversity worldwide</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
