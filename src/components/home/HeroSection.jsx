import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { productKeywords } from './content'

const HeroSection = () => {
  return (
    <section id="top" className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">
            Elegant metal forming equipment
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Precision folding machinery for modern sheet metal production.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 md:text-lg">
            ARTITECT MACHINERY presents a refined range of double folding machine and sheet metal folding solutions built to feel powerful, dependable, and easy to work with.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-500/90"
            >
              Explore products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              Talk to our team
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {['User-friendly operation', 'Stable industrial performance', 'Clean, premium machine presentation', 'Support for multiple folding applications'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                <CheckCircle2 className="h-4 w-4 text-amber-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-lg shadow-black/20">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/95 p-6 text-slate-950 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-700">Core product language</p>
            <div className="mt-6 space-y-3">
              {productKeywords.map((keyword) => (
                <div key={keyword} className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-950">
                  {keyword}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl bg-slate-100 p-5">
              <p className="text-sm font-semibold text-slate-950">Why it works</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                The experience is designed to balance engineering seriousness with clear, approachable communication so buyers can understand value quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
