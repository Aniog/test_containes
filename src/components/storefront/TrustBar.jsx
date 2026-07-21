import { trustPoints } from '@/data/products'

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-stone/10 bg-velmora-ivory">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-velmora-stone md:flex-row md:items-center md:justify-between md:px-8">
        {trustPoints.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
    </section>
  )
}
