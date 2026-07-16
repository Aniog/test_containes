import { trustHighlights } from '@/data/products.js'

const TrustBar = () => {
  return (
    <section className="border-y border-line bg-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 md:px-8">
        {trustHighlights.map((item) => (
          <div key={item} className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-ink/80">
            <span>{item}</span>
            <span className="hidden text-line sm:inline">·</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
