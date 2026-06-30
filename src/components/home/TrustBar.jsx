import { trustBadges } from '@/data/store.js'

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-stone-950/90">
      <div className="section-shell overflow-hidden py-4">
        <div className="flex min-w-max items-center gap-4 text-xs uppercase tracking-[0.26em] text-stone-300 sm:justify-between sm:gap-6">
          {trustBadges.map((badge, index) => (
            <div key={badge} className="flex items-center gap-4">
              <span>{badge}</span>
              {index < trustBadges.length - 1 ? <span className="text-stone-600">·</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
