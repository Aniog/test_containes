export default function Footer() {
  return (
    <footer className="bg-[#050a0f] border-t border-[#00d4c8]/10 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4c8] to-violet-600 flex items-center justify-center text-xs font-black text-white">M</span>
            <span className="text-[#e8f4f8] font-bold text-lg">MicroCosmos</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {['Explore', 'Gallery', 'Worlds', 'Science', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#4a7a8a] hover:text-[#00d4c8] text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-[#4a7a8a] text-sm text-center md:text-right">
            © 2026 MicroCosmos. <br className="md:hidden" />
            Revealing the invisible world.
          </p>
        </div>
      </div>
    </footer>
  );
}
