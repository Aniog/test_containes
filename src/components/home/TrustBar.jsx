const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="bg-velmora-cream border-b border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-12">
          {trustItems.map((item) => (
            <span
              key={item}
              className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-velmora-taupe"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
