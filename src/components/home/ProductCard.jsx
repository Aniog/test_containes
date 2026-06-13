import { CheckCircle2 } from 'lucide-react'

function ProductCard({ eyebrow, title, description, highlights }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      <div className="mt-6 space-y-3">
        {highlights.map((highlight) => (
          <div key={highlight} className="flex items-center gap-3 text-sm text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-amber-500" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </article>
  )
}

export default ProductCard
