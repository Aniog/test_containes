export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500" aria-hidden />
            <span className="font-serif text-xl font-medium text-stone-50">ARTITECT</span>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">Machinery</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Precision sheet metal folding machines, double folders, and long-bed
            folding systems — designed, built, and supported in-house.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-stone-50 font-medium">Products</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#products" className="hover:text-amber-500 transition-colors">AF-3200 Double Folder</a></li>
            <li><a href="#products" className="hover:text-amber-500 transition-colors">MF-2500 Sheet Folder</a></li>
            <li><a href="#products" className="hover:text-amber-500 transition-colors">TF-4000 Long-Bed</a></li>
            <li><a href="#products" className="hover:text-amber-500 transition-colors">CF-1600 Compact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-stone-50 font-medium">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-amber-500 transition-colors">About</a></li>
            <li><a href="#process" className="hover:text-amber-500 transition-colors">Process</a></li>
            <li><a href="#specs" className="hover:text-amber-500 transition-colors">Specifications</a></li>
            <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
          <p>© {year} ARTITECT Machinery. All rights reserved.</p>
          <p className="text-neutral-500">
            Built for fabricators who care about the fold.
          </p>
        </div>
      </div>
    </footer>
  )
}
