const Header = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
            C
          </span>
          <span className="text-lg font-bold tracking-tight">ContactFlow</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <a className="transition hover:text-blue-600" href="#features">Features</a>
          <a className="transition hover:text-blue-600" href="#contact">Contact</a>
          <a className="transition hover:text-blue-600" href="#saved-contacts">Saved contacts</a>
        </div>
        <a
          href="#contact"
          className="rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:border-blue-600 hover:text-blue-800"
        >
          Get in touch
        </a>
      </nav>
    </header>
  )
}

export default Header
