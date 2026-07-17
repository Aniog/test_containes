import { trustBarItems } from '@/data/products'

const TrustBar = () => {
  return (
    <section className="border-y border-velmora-line bg-velmora-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 py-4 text-center md:px-8">
        {trustBarItems.map((item, index) => (
          <div key={item} className="flex items-center gap-5">
            <span className="text-[11px] uppercase tracking-[0.34em] text-velmora-ink/80">
              {item}
            </span>
            {index < trustBarItems.length - 1 ? (
              <span className="hidden h-3 w-px bg-velmora-line md:block" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
