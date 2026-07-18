import { trustPoints } from '@/data/store.js'

function TrustBar() {
  return (
    <div className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-stone-600 md:px-8">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-6">
            <span>{point}</span>
            {index < trustPoints.length - 1 ? <span className="hidden text-stone-300 md:inline">·</span> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
