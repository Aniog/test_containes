import { trustPoints } from '../../data/products'

export default function TrustBar() {
  return (
    <section className="border-b border-t border-velmora-ink/10 bg-velmora-parchment/95">
      <div className="section-shell py-4">
        <div className="section-frame flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center text-[11px] uppercase tracking-[0.26em] text-velmora-cocoa md:gap-x-8">
          {trustPoints.map((point, index) => (
            <div key={point} className="flex items-center gap-5">
              <span>{point}</span>
              {index !== trustPoints.length - 1 ? (
                <span className="hidden h-1 w-1 rounded-full bg-velmora-champagne md:inline-flex" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
