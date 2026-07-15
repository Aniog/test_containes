import { trustItems } from '@/data/storeData'

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-sand bg-velmora-ivory">
      <div className="page-shell overflow-x-auto py-4">
        <div className="flex min-w-max items-center justify-center gap-4 text-[11px] uppercase tracking-[0.28em] text-velmora-taupe sm:gap-6">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-4 sm:gap-6">
              <span>{item}</span>
              {index < trustItems.length - 1 && <span className="text-velmora-gold">·</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
