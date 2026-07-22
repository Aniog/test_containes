
export default function UgcReels({ items }) {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 id="ugc-title" className="font-serif text-5xl text-velmora-espresso md:text-6xl">Seen in Soft Light</h2>
          <p id="ugc-subtitle" className="max-w-sm text-sm leading-7 text-velmora-taupe">Customer-inspired styling moments, from layered necklaces to polished huggie stacks.</p>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <article key={item.id} className="velmora-ugc-fallback group relative aspect-[9/16] w-[68vw] flex-none snap-start overflow-hidden rounded-t-full bg-velmora-blush shadow-soft sm:w-72">
              <div
                role="img"
                aria-label={item.caption}
                className="velmora-ugc-fallback h-full w-full transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso/85 to-transparent p-5 pt-16 text-velmora-porcelain">
                <p id={`ugc-caption-${item.id}`} className="font-serif text-2xl leading-7 text-velmora-porcelain">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
