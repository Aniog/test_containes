export default function Footer() {
  return (
    <footer className="bg-[#050a14] border-t border-cyan-500/10 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-extrabold text-[#e2f4ff]">
            Micro<span className="text-cyan-400">Cosmos</span>
          </h3>
          <p className="text-[#4a7a9b] text-sm mt-1">Exploring the invisible universe</p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#94b8d0]">
          <a href="#intro" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#organisms" className="hover:text-cyan-400 transition-colors">Organisms</a>
          <a href="#gallery" className="hover:text-cyan-400 transition-colors">Gallery</a>
          <a href="#facts" className="hover:text-cyan-400 transition-colors">Facts</a>
          <a href="#habitats" className="hover:text-cyan-400 transition-colors">Habitats</a>
        </nav>

        {/* Copyright */}
        <p className="text-[#4a7a9b] text-xs text-center md:text-right">
          © {new Date().getFullYear()} MicroCosmos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
