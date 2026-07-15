export default function TrustBar({ items }) {
  return (
    <section className="border-y border-velmora-mist bg-velmora-porcelain">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-3 px-5 py-4 text-center text-[11px] uppercase tracking-eyebrow text-velmora-taupe sm:px-6 lg:justify-between lg:px-8">
        {items.map((item, index) => (
          <div className="flex items-center gap-4" key={item}>
            <span>{item}</span>
            {index !== items.length - 1 ? <span className="hidden h-px w-6 bg-velmora-mist lg:block" /> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
