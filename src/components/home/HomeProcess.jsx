const steps = [
  {
    n: '01',
    title: 'Listen',
    desc: 'We start with the part, not the machine. Share your drawings, tolerances, and shop floor — our engineers translate them into a configuration.',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'Each ARTITECT folder is configured to your sheet thickness, length, and production rhythm. Tooling, controls, and automation are matched to the job.',
  },
  {
    n: '03',
    title: 'Build',
    desc: 'Heavy steel frames are stress-relieved, machined, and assembled in our Tianjin facility. Every machine completes a 72-hour burn-in before shipment.',
  },
  {
    n: '04',
    title: 'Install & Train',
    desc: 'Our engineers install the machine, calibrate it on your shop floor, and train your team — typically on a single sample part of your choosing.',
  },
]

const HomeProcess = () => {
  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              How We Work
            </span>
          </div>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tight text-ink max-w-3xl">
            From sheet to finished part —
            <span className="italic text-accent"> a quiet, considered process.</span>
          </h2>
        </div>

        <ol className="grid gap-px bg-mist md:grid-cols-4 border border-mist">
          {steps.map((s) => (
            <li key={s.n} className="bg-paper p-8 md:p-10">
              <p className="font-mono text-xs text-accent tracking-[0.2em]">{s.n}</p>
              <h3 className="font-serif text-2xl text-ink mt-4 mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed text-graphite">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HomeProcess
