const FooterSection = () => {
  return (
    <footer className="py-16 px-6 md:px-12 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-3">MicroCosmos</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Exploring the invisible world through the lens of science and art. Every image tells a story of life at its most fundamental level.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#gallery" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Gallery</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Organisms</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Techniques</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Research</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Newsletter</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Contribute</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2026 MicroCosmos. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Revealing the beauty of the invisible world.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
