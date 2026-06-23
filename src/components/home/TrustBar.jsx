import { trustPoints } from '@/data/products'

function TrustBar() {
  return (
    <section className="border-y border-stone-800/80 bg-stone-900/70 px-4 py-4 backdrop-blur sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-xs uppercase tracking-[0.24em] text-stone-200 sm:gap-x-8">
        {trustPoints.map((point, index) => (
          <div className="flex items-center gap-6" key={point}>
            <span>{point}</span>
            {index < trustPoints.length - 1 ? <span className="hidden text-stone-600 sm:inline">·</span> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
