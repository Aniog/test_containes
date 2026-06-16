const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white md:px-10 lg:px-16">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/40 bg-white/5 text-sm font-semibold text-amber-600">
            AM
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Industrial Folding Systems</p>
            <p className="text-sm font-semibold tracking-[0.12em] text-white">ARTITECT MACHINERY</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a className="transition hover:text-white" href="#products">Products</a>
          <a className="transition hover:text-white" href="#advantages">Advantages</a>
          <a className="transition hover:text-white" href="#process">Process</a>
          <a className="rounded-full border border-white/15 px-4 py-2 text-white transition hover:bg-white hover:text-slate-950" href="#contact">
            Request details
          </a>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
