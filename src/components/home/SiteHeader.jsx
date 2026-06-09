const navItems = ['Machines', 'Applications', 'Why us', 'Contact']

const SiteHeader = () => (
  <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
      <a href="#top" className="text-sm font-semibold tracking-widest text-white">
        ARTITECT MACHINERY
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-sm text-slate-300 transition hover:text-white"
          >
            {item}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="rounded-full border border-amber-300/40 px-4 py-2 text-sm font-medium text-amber-200 transition hover:border-amber-200 hover:bg-white/5 hover:text-white"
      >
        Request a quote
      </a>
    </div>
  </header>
)

export default SiteHeader
