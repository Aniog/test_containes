import { trustPoints } from '@/data/products.js'

const TrustBar = () => {
  return (
    <section className="border-y border-hairline-dark bg-base-muted/60 px-4 py-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-center text-xs uppercase tracking-[0.26em] text-foreground sm:gap-5">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-3">
            <span>{point}</span>
            {index < trustPoints.length - 1 ? <span className="text-accent/70">·</span> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
