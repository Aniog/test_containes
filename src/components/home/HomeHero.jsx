import { ArrowRight, CheckCircle2, Factory, Settings2 } from 'lucide-react'

const machineTags = [
  'Double folding machine',
  'Double folder',
  'Sheet metal folder',
  'Metal folding machine',
]

const highlights = [
  'Operator-friendly machine layouts',
  'Consistent fold quality for production work',
  'Configured for standalone cells or line integration',
]

const HomeHero = () => {
  return (
    <section id="top" className="border-b border-brand-ink/10 bg-gradient-to-br from-brand-ivory via-brand-white to-brand-mist">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-bronze">
            Elegant engineering for modern fabrication
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-brand-ink md:text-6xl">
            Sheet metal folding machines designed to feel refined, reliable, and easy to run.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-slate md:text-xl">
            ARTITECT MACHINERY presents a polished range of double folding machine,
            double folder, sheet metal folder, sheet metal folding machine, metal folder,
            metal folder machine, and metal folding machine solutions for professional
            production teams.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-ink px-6 py-4 text-sm font-semibold text-brand-white transition hover:bg-brand-slate"
            >
              Explore Product Line
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-brand-ink/15 bg-brand-white px-6 py-4 text-sm font-semibold text-brand-ink transition hover:bg-brand-mist"
            >
              Discuss Your Production Needs
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {machineTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brand-ink/10 bg-brand-white px-4 py-2 text-sm font-medium text-brand-slate"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-brand-ink p-8 text-brand-white shadow-2xl shadow-brand-ink/20">
          <div className="flex items-center justify-between border-b border-brand-white/10 pb-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-bronze">
                Product Positioning
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Machinery that balances elegance with usability
              </h2>
            </div>
            <Factory className="h-10 w-10 text-brand-bronze" />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-brand-white/10 p-5">
              <Settings2 className="h-6 w-6 text-brand-bronze" />
              <p className="mt-4 text-lg font-semibold">Refined machine layouts</p>
              <p className="mt-2 text-sm leading-6 text-brand-steel">
                Controls and workflows that help teams move from setup to production with less friction.
              </p>
            </div>
            <div className="rounded-3xl bg-brand-white/10 p-5">
              <CheckCircle2 className="h-6 w-6 text-brand-bronze" />
              <p className="mt-4 text-lg font-semibold">Production-ready output</p>
              <p className="mt-2 text-sm leading-6 text-brand-steel">
                Built for repeatable folding quality across demanding sheet metal applications.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-brand-white/10 bg-brand-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-bronze">
              What teams value most
            </p>
            <ul className="mt-4 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-white">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-bronze" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
