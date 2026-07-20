import { trustPoints } from '../../lib/products'

export default function TrustBar() {
  return (
    <section className="border-b border-t border-sandDeep/70 bg-white/70">
      <div className="page-shell flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 text-center text-xs uppercase tracking-[0.24em] text-ink/75 sm:text-sm">
        {trustPoints.map((point) => (
          <span key={point} className="inline-flex items-center gap-3">
            <span>{point}</span>
          </span>
        ))}
      </div>
    </section>
  )
}
