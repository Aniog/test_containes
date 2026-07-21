import { trustItems } from "@/data/store"

const TrustBar = () => {
  return (
    <section className="border-y border-velvet/10 bg-champagne text-velvet">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-5 py-4 text-center sm:px-6 lg:justify-between lg:px-8">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-velvet/78 sm:text-sm">
            {index > 0 ? <span className="hidden h-px w-10 bg-velvet/15 lg:block" /> : null}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
