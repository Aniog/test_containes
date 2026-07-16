import { trustBadges } from '@/data/store.js'

function TrustBar() {
  return (
    <section className="border-y border-velmora-ink/10 bg-velmora-mist/55">
      <div className="velmora-container overflow-hidden py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-xs uppercase tracking-[0.24em] text-velmora-truffle sm:gap-x-8">
          {trustBadges.map((item) => (
            <span key={item} className="inline-flex items-center gap-3">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
