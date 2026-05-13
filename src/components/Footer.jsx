const Footer = () => (
  <footer className="bg-black/40 border-t border-white/10 py-10 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🌿</span>
        <span
          className="text-lg font-bold text-[#f5f0e8]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Animal World
        </span>
      </div>
      <p className="text-[#a8a090] text-sm text-center">
        Celebrating the incredible diversity of life on Earth. Every species matters.
      </p>
      <p className="text-[#a8a090] text-sm">© 2026 Animal World</p>
    </div>
  </footer>
)

export default Footer
