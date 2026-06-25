const navItems = ['Products', 'Engineering', 'Advantages', 'Contact']

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex shrink-0 items-center gap-3 text-white" aria-label="ARTITECT MACHINERY home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/50 bg-white/10 text-sm font-black tracking-tight text-amber-300 shadow-lg backdrop-blur">
            AM
          </span>
          <span className="hidden text-sm font-bold uppercase tracking-[0.28em] text-white sm:inline">
            ARTITECT MACHINERY
          </span>
        </a>

        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-slate-100 shadow-lg backdrop-blur lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-amber-300">
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:bg-amber-400"
        >
          Request a quote
        </a>
      </nav>
    </header>
  )
}
