const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <div className="border-y border-velmora-sand bg-velmora-pearl text-velmora-ink">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] text-velmora-charcoal no-scrollbar lg:justify-center lg:px-12">
        {items.map((item) => <span key={item} className="shrink-0 snap-start">{item}</span>)}
      </div>
    </div>
  )
}
