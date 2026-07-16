import { trustPoints } from '@/lib/products'

export default function TrustBar() {
  return (
    <div className="border-y border-velmora-sand/40 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-4 py-4 text-center text-[11px] uppercase tracking-[0.32em] text-stone-600 sm:px-6 lg:px-8">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-5">
            <span>{point}</span>
            {index < trustPoints.length - 1 ? <span className="hidden text-stone-300 md:inline">·</span> : null}
          </div>
        ))}
      </div>
    </div>
  )
}
