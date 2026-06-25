const points = [
  {
    title: 'Built for industrial precision',
    text: 'Careful machine architecture and stable operation help teams produce repeatable folds with confidence.',
  },
  {
    title: 'Clear operator experience',
    text: 'A user-friendly presentation makes it easier to understand machine value, workflow fit, and operational benefits.',
  },
  {
    title: 'Ready for demanding production',
    text: 'The overall positioning supports customers who need dependable machinery for ongoing fabrication performance.',
  },
]

const PrecisionSection = () => {
  return (
    <section className="border-y border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">Precision meets simplicity</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">An elegant brand experience built around serious machinery.</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">ARTITECT MACHINERY is presented as a refined industrial partner: premium in feel, structured in information, and comfortable for buyers to explore.</p>
        </div>

        <div className="grid gap-4">
          {points.map((point) => (
            <article key={point.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrecisionSection
