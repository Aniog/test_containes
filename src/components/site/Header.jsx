const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Why Artitect', href: '#advantages' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/80 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label="ARTITECT MACHINERY home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/40 bg-white/10 text-sm font-black tracking-tight text-amber-300">
            AM
          </span>
          <span className="leading-none">
            <span className="block text-base font-bold tracking-[0.22em]">ARTITECT</span>
            <span className="block pt-1 text-xs font-semibold tracking-[0.3em] text-slate-300">MACHINERY</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-200 transition hover:text-amber-300">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="inline-flex rounded-full bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300 md:px-5">
          <span className="md:hidden">Quote</span>
          <span className="hidden md:inline">Request Quote</span>
        </a>
      </nav>
    </header>
  )
}

export default Header
