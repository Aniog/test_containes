import { CheckCircle2 } from 'lucide-react'

const TrustGrid = ({ items }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-3xl border border-brand-line bg-brand-ink p-6 text-white shadow-card md:p-7">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
          <p className="mt-3 text-base leading-7 text-slate-200">{item.description}</p>
        </article>
      ))}
    </div>
  )
}

export default TrustGrid
