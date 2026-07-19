const trustItems = ["Free Worldwide Shipping", "30-Day Returns", "18K Gold Plated", "Hypoallergenic"]

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-hairline bg-velmora-parchment text-velmora-ink">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-5 py-4 text-xs font-bold uppercase tracking-luxe text-velmora-clay no-scrollbar sm:justify-between sm:px-8 lg:px-12">
        {trustItems.map((item) => (
          <div key={item} className="flex shrink-0 snap-center items-center gap-8">
            <span>{item}</span>
            <span className="hidden h-px w-8 bg-velmora-hairline sm:block" />
          </div>
        ))}
      </div>
    </section>
  )
}
