import { useRef } from 'react'
import { UGC_CARDS } from '@/data/products'
import useStockImages from '@/lib/useStockImages'
import StockImage from '@/components/ui/StockImage'

export default function UGCRow() {
  const ref = useRef(null)
  useStockImages(ref, [])

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-bone border-y border-line"
    >
      <div className="container-x">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-3">Worn by you · @velmora</p>
            <h2
              id="ugc-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso"
              style={{ fontWeight: 400 }}
            >
              <span className="italic">In</span> the wild
            </h2>
            <p id="ugc-subtitle" className="mt-3 text-sm text-muted max-w-md">
              Tag #velmoraworn to be featured. A small reel of our community, mid-golden-hour.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-ink hover:text-gold transition-colors duration-300"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll, edge-faded on the right */}
      <div className="relative">
        <div
          className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollPaddingLeft: '1.5rem' }}
        >
          <ul className="flex gap-4 md:gap-5 px-6 md:px-10 pb-4">
            {UGC_CARDS.map((card) => (
              <li
                key={card.id}
                className="relative flex-shrink-0 w-[68vw] sm:w-[42vw] md:w-[280px] lg:w-[300px] aspect-[9/16] snap-start overflow-hidden bg-espresso"
              >
                <StockImage
                  imgId={card.id}
                  query={`[${card.textId}] [ugc-title] [ugc-subtitle] ${card.imageQuery}`}
                  ratio="9x16"
                  width={600}
                  alt={`${card.caption} — ${card.handle}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Bottom warm gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent" />
                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-cream">
                  <p
                    id={card.textId}
                    className="font-serif italic text-2xl md:text-3xl leading-tight"
                    style={{ fontWeight: 400 }}
                  >
                    {card.caption}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-widest-2 text-cream/70">
                    {card.handle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Right edge fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-12 md:w-20 bg-gradient-to-l from-bone to-transparent" />
      </div>
    </section>
  )
}
