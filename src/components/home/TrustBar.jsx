import { trustPoints } from '@/data/store'

const TrustBar = () => {
  return (
    <section className="border-y border-stone-200 bg-stone-100/70">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
        {trustPoints.map((point) => (
          <div className="flex items-center gap-3" key={point}>
            <span className="h-1 w-1 rounded-full bg-amber-700" />
            <p className="text-xs uppercase tracking-[0.28em] text-stone-700 sm:text-sm">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
