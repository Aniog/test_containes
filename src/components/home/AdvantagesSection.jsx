import { features } from './content'

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">Advantages</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            A premium industrial presence with a practical user experience.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/78 md:text-lg">
            ARTITECT MACHINERY is positioned to feel technically confident and commercially approachable. The result is a site that supports both credibility and ease of understanding.
          </p>
        </div>

        <div className="grid gap-6">
          {features.map((feature, index) => (
            <article key={feature.value} className="rounded-[2rem] border border-slate-300 bg-slate-50 p-7">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-sm font-semibold text-slate-950">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-semibold text-slate-950">{feature.value}</h3>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">{feature.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection
