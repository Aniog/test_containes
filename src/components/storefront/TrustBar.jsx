import { trustPillars } from '@/data/storeData'

const TrustBar = () => {
  return (
    <section className="border-y border-velmora-sand bg-velmora-card">
      <div className="velmora-shell overflow-x-auto py-4">
        <div className="flex min-w-max items-center justify-center gap-4 text-xs uppercase tracking-widest text-velmora-smoke sm:gap-6">
          {trustPillars.map((item, index) => (
            <div key={item} className="flex items-center gap-4 sm:gap-6">
              {index > 0 ? <span className="h-px w-6 bg-velmora-sand" /> : null}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
