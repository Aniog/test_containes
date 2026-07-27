import { trustItems } from '@/data/store'

function TrustBar() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-center text-[11px] uppercase tracking-[0.34em] text-stone-600 sm:px-6 sm:text-xs md:grid-cols-4 lg:px-10">
        {trustItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
