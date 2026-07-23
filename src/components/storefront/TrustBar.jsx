import { promoItems } from '@/data/storefront'

export default function TrustBar() {
  return (
    <div className="border-y border-line/60 bg-surface/90 backdrop-blur">
      <div className="section-shell flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-3 text-center text-[11px] uppercase tracking-button text-muted sm:gap-x-6">
        {promoItems.map((item, index) => (
          <div key={item} className="flex items-center gap-4">
            <span>{item}</span>
            {index < promoItems.length - 1 ? <span className="hidden text-line sm:inline">·</span> : null}
          </div>
        ))}
      </div>
    </div>
  )
}
