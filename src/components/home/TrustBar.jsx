const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-sand bg-velmora-pearl text-velmora-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 text-center text-xs font-bold uppercase tracking-label sm:px-8 lg:grid-cols-4 lg:px-10">
        {items.map((item) => <p key={item} className="py-2 text-velmora-cocoa">{item}</p>)}
      </div>
    </section>
  )
}
