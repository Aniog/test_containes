const navItems = ['Products', 'Advantages', 'Applications', 'Contact']

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-graphite text-white shadow-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="ARTITECT MACHINERY home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brass/50 bg-white/10 text-sm font-black text-brass shadow-sm">
            AM
          </span>
          <span>
            <span className="block text-base font-black tracking-wide text-white">ARTITECT</span>
            <span className="block text-xs font-bold uppercase tracking-widest text-white/70">
              Machinery
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-brass">
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-brass px-5 py-3 text-sm font-bold text-graphite shadow-sm transition hover:bg-white sm:inline-flex"
        >
          Request a Quote
        </a>
      </div>
    </header>
  )
}
