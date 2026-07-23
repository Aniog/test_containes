import { trustPoints } from '../../data/store.js'

const TrustBar = () => {
  return (
    <section className="border-y border-sand/50 bg-pearl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-6 py-4 text-center text-[11px] uppercase tracking-[0.22em] text-truffle md:px-8">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-5">
            <span>{point}</span>
            {index < trustPoints.length - 1 ? <span className="hidden text-sand md:block">·</span> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
