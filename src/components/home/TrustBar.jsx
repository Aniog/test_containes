const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-oyster bg-velmora-parchment text-velmora-ink">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-4 py-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] sm:px-6 lg:px-8">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-5 text-velmora-bark">
            <span>{item}</span>
            {index < trustItems.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-gold sm:block" />}
          </div>
        ))}
      </div>
    </section>
  )
}
