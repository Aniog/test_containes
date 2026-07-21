const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-mist bg-velmora-cream text-velmora-espresso" aria-label="Store benefits">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-velmora-mist px-4 sm:grid-cols-4 sm:divide-y-0 sm:px-6 lg:px-8">
        {trustItems.map((item) => (
          <p key={item} className="py-4 text-center text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-velmora-umber sm:text-xs">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
