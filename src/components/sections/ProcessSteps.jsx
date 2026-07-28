import { processSteps } from '@/data/siteContent'

const ProcessSteps = () => {
  return (
    <div className="grid gap-5 lg:grid-cols-5">
      {processSteps.map((item) => (
        <article key={item.step} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">{item.step}</div>
          <h3 className="mt-4 text-lg font-semibold text-brand-navy">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
        </article>
      ))}
    </div>
  )
}

export default ProcessSteps
