const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <div className="border-b border-velmora-mist bg-velmora-ivory text-velmora-ink">
      <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-4 py-4 text-[11px] font-bold uppercase tracking-[0.22em] sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item} className="min-w-max snap-center text-center text-velmora-espresso">{item}</div>
        ))}
      </div>
    </div>
  )
}
