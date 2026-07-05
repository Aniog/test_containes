import { trustPoints } from '@/data/store'

function TrustBar() {
  return (
    <section className="border-y border-line-inverse bg-velvet text-ivory">
      <div className="section-shell overflow-hidden py-4">
        <div className="flex min-w-max items-center justify-center gap-4 text-[11px] uppercase tracking-[0.26em] text-ivory/74 md:gap-6 md:text-xs">
          {trustPoints.map((point, index) => (
            <div key={point} className="flex items-center gap-4 md:gap-6">
              <span>{point}</span>
              {index < trustPoints.length - 1 ? <span className="text-champagne">·</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
