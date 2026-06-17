import { Layers, Gauge, Cpu, Award } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Bidirectional Precision',
    description:
      'Double folder geometry that bends both up and down — eliminating part rotation and accelerating throughput on complex panels.',
  },
  {
    icon: Gauge,
    title: 'Tolerances You Can Trust',
    description:
      'Cast steel frames, ground tooling and closed-loop servo control deliver consistent ±0.05 mm accuracy across long production runs.',
  },
  {
    icon: Cpu,
    title: 'Intuitive CNC Control',
    description:
      'A modern touchscreen interface with stored recipes, visual programming, and remote diagnostics — built for shop-floor operators.',
  },
  {
    icon: Award,
    title: 'Built to Last Decades',
    description:
      'Every machine is assembled by hand in our workshop, tested for 200+ hours, and warranted with global service support.',
  },
]

const HomeFeatures = () => {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="block text-xs tracking-[0.3em] uppercase text-brass mb-5">
            Why Artitect
          </span>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.15]">
            Quietly remarkable details, repeated tens of thousands of times.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="flex gap-6 border-t border-mist pt-8"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-ink/20">
                  <Icon className="w-5 h-5 text-brass" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-ink">{f.title}</h3>
                  <p className="mt-3 text-steel leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures
