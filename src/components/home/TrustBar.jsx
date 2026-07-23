import { trustPoints } from '@/data/storeData'

const TrustBar = () => {
  return (
    <section className="border-y border-stone-300/70 bg-stone-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-3 px-5 py-4 text-center text-[11px] uppercase tracking-[0.35em] text-stone-700 sm:px-6 lg:px-8">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-4">
            <span>{point}</span>
            {index < trustPoints.length - 1 ? <span className="hidden text-stone-400 md:inline">·</span> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
