const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-hairline bg-velmora-porcelain text-velmora-ink">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-4 py-4 text-xs font-semibold uppercase tracking-[0.22em] sm:px-6 lg:justify-center lg:px-8">
        {items.map((item) => (
          <div key={item} className="flex shrink-0 snap-start items-center gap-8 text-velmora-ink">
            <span>{item}</span>
            <span className="h-1 w-1 rounded-full bg-velmora-champagne last:hidden" />
          </div>
        ))}
      </div>
    </section>
  )
}
