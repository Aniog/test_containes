const promises = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-espresso/10 bg-velmora-ivory text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-4 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe sm:px-6 lg:justify-center lg:px-8">
        {promises.map((item, index) => (
          <div key={item} className="flex shrink-0 snap-start items-center gap-8">
            <span>{item}</span>
            {index < promises.length - 1 && <span className="hidden h-px w-8 bg-velmora-gold/50 lg:block" />}
          </div>
        ))}
      </div>
    </section>
  )
}
