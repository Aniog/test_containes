import { TRUST_ITEMS } from '@/data/products.js'

const TrustBar = () => (
  <section className="border-y border-champagne/25 bg-ivory/95 py-3">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 sm:px-6 lg:px-8">
      {TRUST_ITEMS.map((item) => (
        <p key={item} className="text-[11px] font-medium uppercase tracking-[0.28em] text-espresso/82">
          {item}
        </p>
      ))}
    </div>
  </section>
)

export default TrustBar
