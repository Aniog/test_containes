const steps = [
  {
    n: "01",
    title: "Tell us what you fold",
    body: "Share materials, sheet sizes, profiles and daily volume. We'll suggest the right Artitect for your shop.",
  },
  {
    n: "02",
    title: "Configure your machine",
    body: "Working length, drive type, controls, tooling — each Artitect is configured to the way you work.",
  },
  {
    n: "03",
    title: "Install & train",
    body: "We deliver, install, and train your operators on-site. Most teams are folding production parts the same day.",
  },
  {
    n: "04",
    title: "Fold for decades",
    body: "Lifetime support, calibration, and parts. An Artitect machine is a long, quiet, productive relationship.",
  },
]

const HomeProcess = () => {
  return (
    <section className="bg-bone border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-accent" />
              <p className="text-xs uppercase tracking-[0.35em] text-accent">How it works</p>
            </div>
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight text-graphite">
              From first call to first <span className="italic text-accent">fold.</span>
            </h2>
            <p className="mt-6 text-muted-ink leading-relaxed">
              We make the purchase of a precision folder feel like the easiest decision you'll make this year.
            </p>
          </div>

          <ol className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline border border-hairline">
            {steps.map((step) => (
              <li key={step.n} className="bg-cloud p-8">
                <p className="font-serif text-3xl text-accent">{step.n}</p>
                <h3 className="mt-3 font-serif text-xl text-graphite">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-ink leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default HomeProcess
