import { trustItems } from '@/data/products.js?velmora=20260707'

export default function TrustBar() {
  return (
    <section className="border-b hairline-divider bg-white/60">
      <div className="container-shell overflow-x-auto py-4">
        <div className="flex min-w-max items-center gap-4 text-xs font-semibold uppercase tracking-luxe text-velmora-espresso/72 md:min-w-0 md:justify-between">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-4">
              <span>{item}</span>
              {index < trustItems.length - 1 ? <span className="text-velmora-gold">·</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
