export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-black text-white tracking-tight">
          Micro<span className="text-cyan-400">Cosmos</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#explore" className="hover:text-white transition">Explore</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#" className="hover:text-white transition">Specimens</a>
        </div>
        <a
          href="#explore"
          className="bg-cyan-400 text-slate-950 font-bold px-5 py-2 rounded-full hover:bg-cyan-300 transition text-sm"
        >
          Discover
        </a>
      </div>
    </nav>
  );
}
