import { trustPoints } from '@/data/catalog'

const TrustBar = () => {
  return (
    <section className="border-b border-t border-stone-200 bg-white text-stone-700">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-3 px-4 py-4 text-center text-[11px] font-medium uppercase tracking-[0.28em] sm:px-6 lg:px-8">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-4">
            <span>{point}</span>
            {index < trustPoints.length - 1 ? (
              <span aria-hidden="true" className="text-stone-300">
                ·
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
