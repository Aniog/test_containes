const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-ink/10 bg-velmora-cream text-velmora-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 md:grid-cols-4 md:px-8">
        {trustItems.map((item) => (
          <div key={item} className="py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-velmora-ink/75">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
