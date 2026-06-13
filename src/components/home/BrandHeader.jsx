const BrandHeader = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-700">
            ARTITECT MACHINERY
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Elegant machinery for precise sheet metal folding
          </p>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Request a quote
        </a>
      </div>
    </header>
  )
}

export default BrandHeader
