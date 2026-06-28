export default function TrustBar({ items }) {
  return (
    <section className="border-y border-velmora-line bg-velmora-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 py-4 text-center text-[11px] uppercase tracking-brand text-velmora-taupe sm:px-8 lg:justify-between lg:px-12">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}
