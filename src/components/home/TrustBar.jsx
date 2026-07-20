const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-sand bg-velmora-sand/55 text-velmora-ink">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 text-center text-[0.68rem] font-semibold uppercase tracking-luxury md:px-8">
        {items.map((item, index) => (
          <span key={item} className="flex items-center gap-6">
            {item}
            {index < items.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-gold md:inline-block" />}
          </span>
        ))}
      </div>
    </section>
  )
}
