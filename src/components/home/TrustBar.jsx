import { trustHighlights } from '@/data/products'

const TrustBar = () => (
  <section className="border-y border-velmora-line bg-velmora-pearl">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-velmora-mist sm:px-6 lg:justify-between lg:px-8">
      {trustHighlights.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  </section>
)

export default TrustBar
