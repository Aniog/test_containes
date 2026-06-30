import { trustPoints } from '@/data/products'

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-line bg-velmora-ivory py-3">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5 text-center text-[11px] uppercase tracking-[0.34em] text-velmora-ink/68 sm:px-6 lg:justify-between lg:px-8">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-5">
            <span>{point}</span>
            {index < trustPoints.length - 1 ? (
              <span className="hidden h-3 w-px bg-velmora-line lg:block" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
