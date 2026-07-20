const points = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-ink/10 bg-velmora-porcelain text-velmora-ink">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-5 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-cocoa/80 sm:px-8 lg:justify-center lg:px-12">
        {points.map((point) => (
          <span key={point} className="shrink-0 snap-center after:ml-8 after:text-velmora-champagne after:content-['·'] last:after:hidden">
            {point}
          </span>
        ))}
      </div>
    </section>
  )
}
