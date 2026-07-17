import { trustPoints } from '@/data/products'

const TrustBar = () => (
  <section className="border-y border-velvet-200/70 bg-cream-100">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 text-center text-[11px] font-medium uppercase tracking-[0.35em] text-velvet-700 sm:px-6 lg:px-8">
      {trustPoints.map((point) => (
        <div key={point} className="flex items-center gap-3">
          <span>{point}</span>
          <span className="hidden h-px w-6 bg-velvet-200 sm:block" />
        </div>
      ))}
    </div>
  </section>
)

export default TrustBar
