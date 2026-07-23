import { trustPoints } from '@/data/storeData'

function TrustBar() {
  return (
    <section className="border-y border-mist/70 bg-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
        {trustPoints.map((point) => (
          <div key={point} className="flex items-center gap-3">
            <span className="h-px w-5 bg-mist" />
            <p className="text-[11px] uppercase tracking-[0.24em] text-ink/72 sm:text-xs">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
