export default function Footer() {
  return (
    <footer className="bg-[#050a0f] border-t border-[#00d4ff]/10 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#050a0f]" />
              </div>
              <span className="text-[#f0f8ff] font-bold text-lg">
                Micro<span className="text-[#00d4ff]">Cosmos</span>
              </span>
            </div>
            <p className="text-[#8bafc7] text-sm leading-relaxed max-w-xs">
              Dedicated to revealing the extraordinary beauty and complexity of the microscopic world through science, art, and exploration.
            </p>
          </div>

          <div>
            <h4 className="text-[#f0f8ff] font-semibold text-sm mb-4 tracking-wide">Explore</h4>
            <ul className="space-y-2">
              {['Cell Biology', 'Crystallography', 'Microbiology', 'Nanotechnology', 'Electron Microscopy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#8bafc7] text-sm hover:text-[#00d4ff] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#f0f8ff] font-semibold text-sm mb-4 tracking-wide">Connect</h4>
            <ul className="space-y-2">
              {['Newsletter', 'Research Papers', 'Image Archive', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#8bafc7] text-sm hover:text-[#00d4ff] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00d4ff]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8bafc7] text-xs">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-[#8bafc7] text-xs">
            Exploring the invisible since 2020
          </p>
        </div>
      </div>
    </footer>
  );
}
