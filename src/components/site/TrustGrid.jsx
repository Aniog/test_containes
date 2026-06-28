import { ShieldCheck } from 'lucide-react'

function TrustGrid({ points }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {points.map((point) => (
        <article
          key={point.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <ShieldCheck className="h-8 w-8 text-teal-600" />
          <h3 className="mt-4 text-xl font-semibold text-slate-900">{point.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{point.description}</p>
        </article>
      ))}
    </div>
  )
}

export default TrustGrid
