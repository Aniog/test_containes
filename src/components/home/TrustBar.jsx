const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-stone/80 bg-velmora-ivory text-velmora-ink" aria-label="Shopping benefits">
      <div className="section-shell flex snap-x gap-6 overflow-x-auto py-4 text-xs font-semibold uppercase tracking-luxury text-velmora-taupe sm:justify-between sm:overflow-visible">
        {items.map((item) => (
          <div key={item} className="flex shrink-0 snap-start items-center gap-6">
            <span>{item}</span>
            <span className="hidden h-1 w-1 rounded-full bg-velmora-champagne last:hidden sm:block" />
          </div>
        ))}
      </div>
    </section>
  )
}
