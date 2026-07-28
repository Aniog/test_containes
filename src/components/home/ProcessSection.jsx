const steps = [
  {
    num: "01",
    title: "Submit Your Request",
    desc: "Share your product details, target price, quantity, and any specific requirements.",
  },
  {
    num: "02",
    title: "We Source & Verify",
    desc: "Our team identifies 3–5 qualified suppliers and conducts factory verification on your behalf.",
  },
  {
    num: "03",
    title: "You Review Quotes",
    desc: "Receive a detailed comparison report with pricing, lead times, and factory audit results.",
  },
  {
    num: "04",
    title: "Place Order & We Manage",
    desc: "We negotiate terms, follow production, conduct QC inspections, and coordinate shipping.",
  },
]

export default function ProcessSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            How It Works
          </span>
          <h2 id="process-title" className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">
            A Simple 4-Step Sourcing Process
          </h2>
          <p id="process-desc" className="mt-4 text-text-secondary leading-relaxed">
            Transparent, efficient, and designed to minimize risk at every stage.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <span className="text-5xl font-extrabold text-primary/10">{step.num}</span>
              <h3 className="mt-2 text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
