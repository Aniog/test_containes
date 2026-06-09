import { ArrowRight, Gauge, Layers3, ShieldCheck } from 'lucide-react'

const stats = [
  { label: 'Production focus', value: 'Premium folding systems' },
  { label: 'Machine direction', value: 'Elegant and user friendly' },
  { label: 'Core fit', value: 'Sheet metal fabrication' },
]

const featurePills = [
  {
    icon: Gauge,
    title: 'Precision-led control',
    description: 'Clear machine operation for confident daily output.',
  },
  {
    icon: Layers3,
    title: 'Versatile folding range',
    description: 'Designed around double folding and metal panel flexibility.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable industrial build',
    description: 'Built for stable performance across repeated production cycles.',
  },
]

export default function HomeHero({ heroPoints }) {
  return (
    <section className="bg-stone-950 text-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 backdrop-blur-sm md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="text-xs font-medium uppercase tracking-widest text-amber-300">
                  ARTITECT MACHINERY
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-50 md:text-6xl">
                  Elegant folding machinery made for modern sheet metal production.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-stone-300 md:text-lg">
                  ARTITECT MACHINERY presents double folding machines and sheet metal
                  folding solutions that bring together premium presentation,
                  user-friendly operation, and dependable production quality.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {heroPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm leading-6 text-stone-200"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Explore product range
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#advantages"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-amber-300/50 hover:text-amber-200"
                >
                  See why manufacturers choose us
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/20">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    alt="ARTITECT MACHINERY folding machine"
                    className="h-full w-full object-cover"
                    data-strk-img-id="artitect-hero-machine-b1a2c3"
                    data-strk-img="[hero-machine-desc] [hero-machine-title] [hero-brand-title]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p
                    id="hero-brand-title"
                    className="text-xs font-medium uppercase tracking-widest text-amber-300"
                  >
                    Elegant industrial systems
                  </p>
                  <h2
                    id="hero-machine-title"
                    className="text-2xl font-semibold tracking-tight text-stone-50"
                  >
                    Double folding performance with a refined machine presence.
                  </h2>
                  <p id="hero-machine-desc" className="text-sm leading-6 text-stone-300">
                    A visual and operational balance between industrial strength,
                    clean handling, and premium output for demanding fabricators.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs uppercase tracking-widest text-stone-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-stone-100">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
            {featurePills.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black/15 p-5"
              >
                <Icon className="h-5 w-5 text-amber-300" />
                <h3 className="mt-4 text-lg font-semibold text-stone-50">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
