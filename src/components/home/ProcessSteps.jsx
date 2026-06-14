const steps = [
  {
    n: "01",
    title: "Consult",
    body: "We learn the parts you make, the tolerances you need, and the constraints of your shop.",
  },
  {
    n: "02",
    title: "Configure",
    body: "Our engineers configure the right machine — length, capacity, controls, tooling.",
  },
  {
    n: "03",
    title: "Build",
    body: "Fabrication, assembly, and quality inspection in our Shanghai facility, 4–6 weeks.",
  },
  {
    n: "04",
    title: "Install & support",
    body: "On-site commissioning, operator training, and lifetime remote diagnostics.",
  },
]

export default function ProcessSteps() {
  return (
    <section className="section bg-ink text-cream">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">How we work</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream">
            From first call to first bend.
          </h2>
          <p className="mt-6 text-base md:text-lg text-cream/70 leading-relaxed">
            A clear four-step process means no surprises — only a machine that
            does exactly what we said it would.
          </p>
        </div>

        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="border-t border-cream/15 pt-8">
              <span className="font-display text-4xl text-gold">{s.n}</span>
              <h3 className="mt-6 font-display text-2xl text-cream">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
