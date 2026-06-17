const steps = [
  {
    n: '01',
    title: 'Consultation',
    description:
      'We start with a conversation about your workshop, materials, and production goals.',
  },
  {
    n: '02',
    title: 'Specification',
    description:
      'Our engineers tailor a configuration — bending length, gauge, tooling, automation.',
  },
  {
    n: '03',
    title: 'Build & Test',
    description:
      'Each machine is hand-assembled, calibrated, and benchmarked over 200+ hours of testing.',
  },
  {
    n: '04',
    title: 'Install & Support',
    description:
      'Worldwide installation, operator training, and lifetime technical support included.',
  },
]

const HomeProcess = () => {
  return (
    <section className="bg-ink text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="block text-xs tracking-[0.3em] uppercase text-brass mb-5">
            From Brief to Workshop
          </span>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-white leading-[1.15]">
            A considered process, from first conversation to first fold.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((s) => (
            <div
              key={s.n}
              className="border-t border-white/15 pt-8"
            >
              <span className="font-serif text-5xl text-brass">{s.n}</span>
              <h3 className="mt-6 font-serif text-2xl text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-mist/70 leading-relaxed text-sm">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeProcess
