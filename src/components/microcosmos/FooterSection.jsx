const FooterSection = () => {
  return (
    <footer className="bg-[#050810] border-t border-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <span className="text-black font-black text-xs">MC</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Micro<span className="text-cyan-400">Cosmos</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Revealing the extraordinary universe that exists beyond the limits of human vision. Science, art, and wonder — at the microscopic scale.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Explore</h4>
            <ul className="space-y-2">
              {['Gallery', 'Categories', 'Specimen Spotlight', 'Techniques', 'About'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Science */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Science</h4>
            <ul className="space-y-2">
              {['Electron Microscopy', 'Fluorescence Imaging', 'Cryo-EM', 'Confocal Microscopy', 'Research Papers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-mono">
            © 2026 MicroCosmos. All microscopic rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a key={link} href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
