import { Check, Cpu, Headphones, Settings2 } from 'lucide-react'

const advantages = [
  {
    title: 'Practical control',
    description: 'Clear machine layouts and operator-focused workflows make daily folding tasks easier to manage.',
    icon: Cpu,
  },
  {
    title: 'Stable structure',
    description: 'Robust frames support consistent results for sheet metal folders and metal folding machines.',
    icon: Settings2,
  },
  {
    title: 'Responsive guidance',
    description: 'From model selection to commissioning support, ARTITECT keeps the buying process straightforward.',
    icon: Headphones,
  },
]

const capabilities = [
  'Double folding machine selection',
  'Sheet metal folder consultation',
  'Metal folder machine configuration',
  'Workshop productivity planning',
]

function PrecisionSection() {
  return (
    <section id="advantages" className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-slate-200">
          <div
            className="absolute inset-0 opacity-45"
            data-strk-bg-id="artitect-precision-workshop-bg-d3a7e9"
            data-strk-bg="[advantages-subtitle] [advantages-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1000"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/20" aria-hidden="true" />
          <div className="relative flex h-full flex-col justify-end">
            <p className="mb-4 w-fit rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950">Precision-led production</p>
            <h2 id="advantages-title" className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Built to make complex folding feel simple.
            </h2>
            <p id="advantages-subtitle" className="mt-4 max-w-xl text-lg leading-8 text-slate-200">
              ARTITECT MACHINERY focuses on elegant, reliable folding equipment that helps fabricators move from setup to production with less friction.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Advantages</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Elegant machinery, friendly operation.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether customers call it a double folder, sheet metal folding machine, metal folder, or metal folder machine, the goal is the same: reliable bends, confident teams, and efficient output.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {advantages.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950">
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">What we help with</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-slate-950">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrecisionSection
