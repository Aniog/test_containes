import { trustItems } from '@/data/products'

const TrustBar = () => {
  return (
    <section className="border-y border-[var(--color-border-on-dark)] bg-[var(--color-ink)] text-[var(--color-text-on-dark)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 text-[11px] uppercase tracking-[0.34em] text-[var(--color-text-on-dark-muted)] md:px-8 lg:px-12">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-6">
            <span>{item}</span>
            {index < trustItems.length - 1 && <span className="hidden h-px w-6 bg-white/15 md:block" />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
