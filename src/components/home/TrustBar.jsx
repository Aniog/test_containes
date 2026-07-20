const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-stone bg-velmora-pearl text-velmora-espresso" aria-label="Store benefits">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 text-center sm:px-8 md:grid-cols-4">
        {trustItems.map((item) => (
          <p key={item} className="text-[11px] font-bold uppercase tracking-[0.2em] text-velmora-cocoa">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
