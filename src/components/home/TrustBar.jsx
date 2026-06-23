import { trustHighlights } from '@/data/products'

const TrustBar = () => {
  return (
    <section className="border-b border-line bg-pearl">
      <div className="section-shell overflow-x-auto py-4">
        <div className="flex min-w-max items-center justify-center gap-4 text-[0.72rem] uppercase tracking-[0.24em] text-muted sm:gap-6">
          {trustHighlights.map((item, index) => (
            <div key={item} className="flex items-center gap-4 sm:gap-6">
              <span>{item}</span>
              {index < trustHighlights.length - 1 ? <span className="text-line">·</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
