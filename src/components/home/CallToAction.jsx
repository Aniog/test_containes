function CallToAction() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-12 text-slate-950 shadow-sm md:px-10 md:py-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">ARTITECT MACHINERY</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Present your folding solutions with confidence.
          </h2>
          <p className="text-base leading-7 text-slate-600">
            This site is designed to introduce your double folding machine range with a premium look while staying easy
            for visitors to explore and understand.
          </p>
        </div>

        <a
          href="#hero-title"
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Back to top
        </a>
      </div>
    </section>
  )
}

export default CallToAction
