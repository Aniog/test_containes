import { trustPoints } from '../../data/storefront.js'

export default function TrustBar() {
  return (
    <section className="border-y border-stone-200 bg-[var(--velmora-cream)] text-[var(--velmora-ink)]">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-[11px] uppercase tracking-[0.26em] text-stone-600 md:justify-between">
          {trustPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
