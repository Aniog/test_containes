const capabilities = [
  {
    title: 'Precision bending control',
    copy: 'Maintain cleaner bend accuracy across repeat jobs and demanding production schedules.',
  },
  {
    title: 'Operator-friendly workflow',
    copy: 'Intuitive machine handling helps teams reduce setup friction and improve day-to-day ease of use.',
  },
  {
    title: 'Stable industrial construction',
    copy: 'Engineered for long service life in serious fabrication environments.',
  },
  {
    title: 'Flexible application range',
    copy: 'Well suited for panels, enclosures, façade elements, and general sheet metal production.',
  },
  {
    title: 'Custom support mindset',
    copy: 'We help buyers choose the right double folder setup for their process, volume, and finish goals.',
  },
  {
    title: 'Professional finish quality',
    copy: 'Deliver smooth folds that support premium output and stronger downstream consistency.',
  },
]

const CapabilitySection = () => {
  return (
    <section id="capabilities" className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Why manufacturers choose us</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Built to feel premium in performance and simple in operation.
            </h2>
            <p className="max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              ARTITECT MACHINERY combines industrial strength with a clean user experience so production teams can focus on output, consistency, and confidence on the factory floor.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilitySection
