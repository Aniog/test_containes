import strkImgConfig from '@/strk-img-config.json'

const getUgcImageUrl = (item) => strkImgConfig?.[`velmora-ugc-${item.id}`]?.results?.[0]?.url

export default function UgcReels({ items }) {
  return (
    <section className="overflow-hidden bg-velmora-espresso py-16 text-velmora-pearl md:py-24">
      <div className="velmora-container">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-velmora-champagne">Worn lately</p>
            <h2 id="ugc-title" className="serif-display mt-3 text-5xl text-velmora-pearl md:text-7xl">Golden moments</h2>
          </div>
          <p id="ugc-subtitle" className="max-w-sm text-sm leading-7 text-velmora-mist">A reel-style glimpse into the soft shine of everyday Velmora.</p>
        </div>
      </div>
      <div className="overflow-x-auto px-5 scrollbar-none sm:px-8 lg:px-12">
        <div className="flex w-max gap-4 pr-5">
          {items.map((item) => (
            <article key={item.id} className="group relative h-[430px] w-[242px] overflow-hidden rounded-[1.75rem] border border-velmora-gold/25 bg-velmora-clay shadow-soft md:h-[520px] md:w-[292px]">
              <img
                src={getUgcImageUrl(item)}
                alt={item.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
              <p id={`ugc-${item.id}-caption`} className="absolute inset-x-5 bottom-5 font-serif text-2xl font-semibold leading-tight text-velmora-pearl">
                {item.caption}
              </p>
              <span className="sr-only">{item.context}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
