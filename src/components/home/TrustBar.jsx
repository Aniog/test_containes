const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <div className="border-y border-velmora-linen bg-velmora-ivory text-velmora-ink">
      <div className="mx-auto flex max-w-7xl snap-x overflow-x-auto px-5 md:px-8">
        {items.map((item) => (
          <div key={item} className="min-w-max flex-1 snap-center px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-velmora-bronze">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
