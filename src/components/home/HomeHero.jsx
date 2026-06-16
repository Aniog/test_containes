import { ArrowRight, BadgeCheck, ChevronRight } from 'lucide-react'

const trustPoints = ['Engineered for precision', 'Built for daily production', 'Designed for operator clarity']

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-stone-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-8 md:px-10 md:py-10">
        <header className="flex flex-col gap-6 border-b border-slate-200/80 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-500">
              ARTITECT MACHINERY
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Elegant engineering for modern metal folding.
            </h1>
          </div>

          <nav aria-label="Primary" className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-slate-950" href="#products">
              Products
            </a>
            <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-slate-950" href="#capabilities">
              Capabilities
            </a>
            <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-slate-950" href="#why-artitect">
              Why ARTITECT
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 font-medium text-white transition hover:bg-slate-800"
              href="#inquiry"
            >
              Request details
              <ChevronRight className="h-4 w-4" />
            </a>
          </nav>
        </header>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-center rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-amber-600">
              Precision folding systems
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Double folding machines that combine refined control with industrial output.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              ARTITECT MACHINERY presents an elegant, user-friendly product experience for manufacturers seeking dependable sheet metal folding performance, clean finishes, and confident daily operation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                href="#products"
              >
                Explore machines
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                href="#why-artitect"
              >
                See brand strengths
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-slate-200 bg-stone-50 px-4 py-4">
                  <BadgeCheck className="h-5 w-5 text-amber-600" />
                  <p className="mt-3 text-sm font-medium text-slate-800">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-xl md:p-8">
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
                  Product focus
                </div>
                <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-300">Primary line</p>
                      <p className="mt-2 text-xl font-semibold text-white">Double folding machine</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-300">Shop-floor favorite</p>
                      <p className="mt-2 text-xl font-semibold text-white">Double folder</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-300">For formed panels</p>
                      <p className="mt-2 text-xl font-semibold text-white">Sheet metal folder</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-300">Industrial category</p>
                      <p className="mt-2 text-xl font-semibold text-white">Metal folding machine</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-300">Operator feel</p>
                  <p className="mt-2 text-lg font-semibold text-white">Intuitive setup</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-300">Output promise</p>
                  <p className="mt-2 text-lg font-semibold text-white">Repeatable precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
