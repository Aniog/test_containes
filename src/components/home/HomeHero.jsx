const highlights = ['Elegant engineering', 'Operator-friendly workflows', 'Built for precise sheet metal folding']

const HomeHero = () => {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-br from-stone-100 via-white to-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:px-10 md:py-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">ARTITECT MACHINERY</p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-slate-950 md:text-6xl">Premium folding machines designed for accuracy, speed, and daily ease of use.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">From double folding machines to advanced sheet metal folding systems, ARTITECT MACHINERY helps manufacturers deliver cleaner bends, reliable output, and smoother operator experience.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-800">Explore products</a>
            <a href="#contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-medium text-slate-900 transition hover:bg-slate-100">Request a consultation</a>
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:max-w-md md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">Why manufacturers choose us</p>
          {highlights.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-stone-50 px-4 py-4 text-sm font-medium text-slate-800">
              {item}
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="rounded-2xl bg-slate-950 px-4 py-5 text-white"><p className="text-3xl font-semibold">7</p><p className="mt-1 text-sm text-slate-200">core machine formats</p></div>
            <div className="rounded-2xl bg-amber-50 px-4 py-5 text-slate-900"><p className="text-3xl font-semibold">24/7</p><p className="mt-1 text-sm text-slate-600">production-ready mindset</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
