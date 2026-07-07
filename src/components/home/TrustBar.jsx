import { trustPoints } from '@/data/products'

function TrustBar() {
  return (
    <section className="border-b border-stone-200 bg-stone-100">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 text-center sm:px-6 lg:px-8">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.34em] text-stone-700">{point}</span>
            {index < trustPoints.length - 1 ? <span className="hidden h-3 w-px bg-stone-300 md:block" /> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
