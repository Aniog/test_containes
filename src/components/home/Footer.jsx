export default function Footer() {
  return (
    <footer className="bg-[#050a14] border-t border-slate-800 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black text-white mb-4">
              Micro<span className="text-[#00d4aa]">Cosmos</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe that surrounds us — one microscopic image at a time.
            </p>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-[#00d4aa] mb-4">Topics</h4>
            <ul className="space-y-2">
              {['Bacteria & Viruses', 'Animal & Plant Cells', 'Crystals & Minerals', 'Insects & Arthropods', 'Fungi & Spores', 'Plankton & Diatoms'].map((topic) => (
                <li key={topic}>
                  <span className="text-slate-400 text-sm hover:text-[#00d4aa] transition-colors cursor-pointer">
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-[#00d4aa] mb-4">About</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              MicroCosmos is a celebration of the hidden world revealed by modern microscopy — from scanning electron microscopes to fluorescence imaging.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0d1a2e] border border-slate-700 flex items-center justify-center hover:border-[#00d4aa]/50 transition-colors cursor-pointer">
                <span className="text-slate-400 text-xs">𝕏</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0d1a2e] border border-slate-700 flex items-center justify-center hover:border-[#00d4aa]/50 transition-colors cursor-pointer">
                <span className="text-slate-400 text-xs">in</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0d1a2e] border border-slate-700 flex items-center justify-center hover:border-[#00d4aa]/50 transition-colors cursor-pointer">
                <span className="text-slate-400 text-xs">yt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-mono">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs font-mono">
            Images captured via SEM · TEM · Fluorescence · Polarized Light Microscopy
          </p>
        </div>
      </div>
    </footer>
  )
}
