import { trustPoints } from '@/data/store'

const HomeTrustBar = () => {
  return (
    <section className="border-y border-stone-200/80 bg-brand-canvas">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 py-4 text-center text-xs uppercase tracking-[0.32em] text-stone-600 sm:px-6 lg:justify-between lg:px-8">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-5">
            <span>{point}</span>
            {index < trustPoints.length - 1 ? <span className="hidden text-stone-300 lg:inline">·</span> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeTrustBar
