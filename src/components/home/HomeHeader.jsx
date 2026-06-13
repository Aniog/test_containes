const HomeHeader = () => {
  const links = [
    { label: 'Machines', href: '#machines' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white md:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-amber-300">ARTITECT MACHINERY</p>
          <p className="text-sm text-slate-300">Precision sheet metal folding equipment</p>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-amber-400/40 bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
        >
          Request a quote
        </a>
      </div>
    </header>
  )
}

export default HomeHeader
