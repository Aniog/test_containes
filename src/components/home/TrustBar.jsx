const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-linen bg-velmora-ivory text-velmora-ink">
      <div className="velmora-container flex snap-x gap-6 overflow-x-auto py-4 text-xs font-semibold uppercase tracking-nav sm:justify-center sm:gap-10">
        {items.map((item) => <span key={item} className="shrink-0 text-velmora-clay">{item}</span>)}
      </div>
    </section>
  )
}
