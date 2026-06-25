const navigation = ['Products', 'Capabilities', 'Industries', 'Contact']

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-slate-950/80 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label="ARTITECT MACHINERY home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/50 bg-white/10 text-sm font-black text-amber-300">
            AM
          </span>
          <span className="text-sm font-semibold tracking-[0.28em] text-white sm:text-base">ARTITECT MACHINERY</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-200 transition hover:text-amber-300">
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300 sm:inline-flex">
          Request quote
        </a>
      </nav>
    </header>
  )
}
