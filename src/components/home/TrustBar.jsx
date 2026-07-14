const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-champagne/30 bg-velmora-cream text-velmora-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-velmora-champagne/20 px-4 text-center sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">
        {items.map((item) => (
          <p key={item} className="py-4 text-[0.65rem] font-bold uppercase tracking-luxury text-velmora-stone sm:text-xs">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
