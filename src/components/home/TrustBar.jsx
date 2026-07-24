import { trustBarItems } from '../../data/store'

const TrustBar = () => (
  <section className="border-y border-stone-200/10 bg-stone-950/95 px-6 py-4 lg:px-10">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-[11px] uppercase tracking-[0.3em] text-stone-300">
      {trustBarItems.map((item, index) => (
        <div key={item} className="flex items-center gap-6">
          <span>{item}</span>
          {index < trustBarItems.length - 1 ? (
            <span className="hidden h-3 w-px bg-stone-200/15 sm:block" />
          ) : null}
        </div>
      ))}
    </div>
  </section>
)

export default TrustBar
