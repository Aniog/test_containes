const steps = [
  {
    number: '01',
    title: 'Share your application',
    text: 'Tell us your material type, thickness range, bend lengths, and production targets.',
  },
  {
    number: '02',
    title: 'Match the right folder',
    text: 'We recommend a double folder, sheet metal folder, or metal folding machine configuration based on your needs.',
  },
  {
    number: '03',
    title: 'Plan smooth operation',
    text: 'Get clear guidance for setup, workflow, operator usability, and long-term machine reliability.',
  },
]

function ProcessSection() {
  return (
    <section id="process" className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-300">Selection Process</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              From machine choice to confident production.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-200">
            A great folding machine should be easy to choose and easy to use. Our process keeps product selection clear, direct, and focused on practical results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 text-white backdrop-blur transition hover:border-amber-300/50 hover:bg-white/[0.14]">
              <p className="text-5xl font-black tracking-tight text-amber-300">{step.number}</p>
              <h3 className="mt-8 text-2xl font-bold text-white">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-200">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
