const navigationItems = ['Products', 'Advantages', 'Process', 'Contact']

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/70 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 text-white" aria-label="ARTITECT MACHINERY home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/50 bg-amber-500 text-base font-black text-slate-950 shadow-lg shadow-amber-500/20">
            AM
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-white">ARTITECT</span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-amber-200">Machinery</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-200 transition hover:text-amber-300"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-amber-300/70 bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300 sm:inline-flex"
        >
          Request a Quote
        </a>
      </nav>
    </header>
  )
}
