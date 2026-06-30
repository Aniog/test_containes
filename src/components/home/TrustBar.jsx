import { trustBadges } from '@/data/storefront'

const TrustBar = () => (
  <section className="border-y border-stone-200 bg-white">
    <div className="page-shell overflow-x-auto py-4">
      <div className="flex min-w-max items-center justify-center gap-4 text-[11px] uppercase tracking-[0.34em] text-stone-600 sm:gap-6">
        {trustBadges.map((item, index) => (
          <div key={item} className="flex items-center gap-4">
            <span>{item}</span>
            {index < trustBadges.length - 1 ? <span className="h-1 w-1 rounded-full bg-stone-300" /> : null}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TrustBar
