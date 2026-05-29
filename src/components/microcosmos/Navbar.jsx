export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-[#050a0f]/80 backdrop-blur-md border-b border-[#00d4ff]/10">
      <a href="#" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#050a0f]" />
        </div>
        <span className="text-[#f0f8ff] font-bold text-lg tracking-tight">
          Micro<span className="text-[#00d4ff]">Cosmos</span>
        </span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {[['#explore', 'Explore'], ['#gallery', 'Gallery'], ['#', 'Discoveries'], ['#', 'Scale']].map(([href, label]) => (
          <a
            key={label}
            href={href}
            className="text-[#8bafc7] hover:text-[#f0f8ff] text-sm font-medium transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </div>

      <a
        href="#"
        className="px-5 py-2 rounded-full border border-[#00d4ff]/40 text-[#00d4ff] text-sm font-semibold hover:bg-[#00d4ff]/10 transition-all duration-300"
      >
        Subscribe
      </a>
    </nav>
  );
}
