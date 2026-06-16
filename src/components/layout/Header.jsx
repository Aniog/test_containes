const navItems = [
  { href: '#products', label: 'Products' },
  { href: '#advantages', label: 'Advantages' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 text-slate-50 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between" aria-label="Main navigation">
        <div className="flex w-full items-center justify-between gap-4 md:w-auto">
          <a href="#top" className="flex items-center gap-3 text-slate-50" aria-label="ARTITECT MACHINERY home">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500 text-sm font-bold text-slate-950">AM</span>
            <span className="text-sm font-semibold uppercase tracking-widest">ARTITECT MACHINERY</span>
          </a>
          <a href="#contact" className="rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-400 md:hidden">
            Quote
          </a>
        </div>
        <div className="flex w-full items-center justify-between gap-3 overflow-x-auto pb-1 md:w-auto md:justify-center md:gap-8 md:overflow-visible md:pb-0">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap text-sm font-medium text-slate-200 transition hover:text-amber-300">
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 md:inline-flex">
          Request a quote
        </a>
      </nav>
    </header>
  )
}
