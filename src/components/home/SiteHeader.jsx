const navItems = ['Products', 'Capabilities', 'Industries', 'Contact']

const SiteHeader = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-slate-950/70 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label="ARTITECT MACHINERY home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/40 bg-amber-400 text-sm font-black text-slate-950 shadow-lg shadow-amber-950/30">
            AM
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.24em]">ARTITECT</span>
            <span className="block text-xs font-medium uppercase tracking-[0.28em] text-slate-300">Machinery</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-200 transition hover:text-amber-300">
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300 md:inline-flex">
          Request quote
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
