function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-brand-ink/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white md:px-10 lg:px-16">
        <a href="#top" className="text-sm font-semibold tracking-wide text-white md:text-base">
          ARTITECT MACHINERY
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/72 md:flex">
          <a className="transition hover:text-white" href="#products">Products</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
