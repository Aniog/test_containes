import { trustItems } from '@/data/products'

export default function TrustBar() {
  return (
    <section className="bg-espresso text-ivory border-y border-espresso">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-5">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2 text-center md:text-left">
          {trustItems.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-ivory/85"
            >
              <span>{item}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline text-gold-soft/40">·</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
