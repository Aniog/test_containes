import { trustPoints } from '@/data/products'

function TrustBar() {
  return (
    <section className="border-y border-velmora-sand/30 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-velmora-aubergine/85 md:px-8 lg:justify-between lg:px-10">
        {trustPoints.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
