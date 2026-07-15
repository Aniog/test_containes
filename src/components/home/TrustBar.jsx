import { trustPoints } from '@/data/store'

const TrustBar = () => (
  <section className="border-y border-stone-200 bg-stone-100">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 text-center text-xs uppercase tracking-[0.34em] text-stone-700 sm:px-6 lg:px-8">
      {trustPoints.map((point, index) => (
        <div key={point} className="flex items-center gap-6">
          <span>{point}</span>
          {index < trustPoints.length - 1 ? (
            <span className="hidden h-3 w-px bg-stone-300 sm:block" />
          ) : null}
        </div>
      ))}
    </div>
  </section>
)

export default TrustBar
