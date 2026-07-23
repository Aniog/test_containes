const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-sand bg-velmora-pearl text-velmora-ink">
      <div className="velmora-container flex snap-x gap-6 overflow-x-auto py-4 text-[0.68rem] font-bold uppercase tracking-[0.20em] text-velmora-clay scrollbar-none md:justify-center md:gap-10">
        {items.map((item) => (
          <span key={item} className="shrink-0 snap-center whitespace-nowrap after:ml-6 after:text-velmora-gold after:content-['·'] last:after:hidden md:after:ml-10">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
