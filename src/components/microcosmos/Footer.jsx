export default function Footer() {
  return (
    <footer className="bg-[#050d12] border-t border-[rgba(0,212,170,0.1)] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-black text-[#f0faf8] mb-2">
              Micro<span className="text-[#00d4aa]">Cosmos</span>
            </div>
            <p className="text-sm text-[#4a7a72]">
              Exploring the invisible universe, one image at a time.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[#94b8b0]">
            <a href="#about" className="hover:text-[#00d4aa] transition-colors">About</a>
            <a href="#gallery" className="hover:text-[#00d4aa] transition-colors">Gallery</a>
            <a href="#specimens" className="hover:text-[#00d4aa] transition-colors">Specimens</a>
            <a href="#worlds" className="hover:text-[#00d4aa] transition-colors">Worlds</a>
            <a href="#techniques" className="hover:text-[#00d4aa] transition-colors">Techniques</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[rgba(0,212,170,0.08)] text-center text-xs text-[#4a7a72]">
          © 2026 MicroCosmos. All images captured through the lens of science.
        </div>
      </div>
    </footer>
  )
}
