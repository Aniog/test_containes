const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <div className="border-y border-velmora-mist bg-velmora-linen text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-7 overflow-x-auto px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-charcoal scrollbar-none md:justify-center md:px-8 lg:px-10">
        {items.map((item) => (
          <span key={item} className="shrink-0 snap-start after:ml-7 after:text-velmora-gold after:content-['·'] last:after:hidden">{item}</span>
        ))}
      </div>
    </div>
  )
}
