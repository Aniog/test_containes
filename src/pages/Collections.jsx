import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { CATEGORY_TILES } from '@/data/products'
import useStockImages from '@/lib/useStockImages'
import StockImage from '@/components/ui/StockImage'

const COLLECTIONS = [
  {
    id: 'autumn-edit',
    name: 'Autumn Edit',
    description:
      'A six-piece capsule in brushed gold and soft crystal. Designed for layering into the colder months.',
    imageQuery: 'gold jewelry flat lay autumn warm cozy aesthetic',
    textId: 'coll-autumn-title',
    productCount: 6,
  },
  {
    id: 'gifting-edit',
    name: 'Gifting Edit',
    description:
      'Our most-asked-for gifts, ribbon-tied. Sets, single pieces, and a few things just for you.',
    imageQuery: 'gold jewelry gift box ribbon cream',
    textId: 'coll-gifting-title',
    productCount: 4,
  },
  {
    id: 'everyday-ritual',
    name: 'The Everyday Ritual',
    description:
      'Three pieces you never take off. The Velmora uniform for women who don\u2019t think about getting dressed.',
    imageQuery: 'minimal gold jewelry stack on warm linen',
    textId: 'coll-everyday-title',
    productCount: 3,
  },
]

export default function Collections() {
  const ref = useRef(null)
  useStockImages(ref, [])

  return (
    <article ref={ref}>
      <section className="pt-32 md:pt-40 pb-14 md:pb-20 bg-cream-2 border-b border-line">
        <div className="container-x">
          <p className="eyebrow mb-4">Collections</p>
          <h1
            id="coll-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05]"
            style={{ fontWeight: 400 }}
          >
            Curated <span className="italic">stories</span>, told in gold.
          </h1>
          <p
            id="coll-subtitle"
            className="mt-6 text-base md:text-lg text-ink/80 leading-relaxed font-light max-w-xl"
          >
            Seasonal edits and considered sets — each one a small, complete wardrobe for the season ahead.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x space-y-16 md:space-y-24">
          {COLLECTIONS.map((c, i) => (
            <div
              key={c.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="md:col-span-7">
                <Link
                  to={`/shop?collection=${c.id}`}
                  className="group block relative overflow-hidden bg-espresso aspect-[4/3]"
                >
                  <StockImage
                    imgId={`coll-${c.id}`}
                    query={`[${c.textId}] [coll-title] [coll-subtitle] ${c.imageQuery}`}
                    ratio="4x3"
                    width={1100}
                    alt={c.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
                </Link>
              </div>
              <div className="md:col-span-5">
                <p className="eyebrow mb-4">{c.productCount} pieces</p>
                <h2
                  id={c.textId}
                  className="font-serif text-3xl md:text-4xl text-espresso leading-tight"
                  style={{ fontWeight: 400 }}
                >
                  {c.name}
                </h2>
                <p className="mt-5 text-ink/80 leading-relaxed font-light">
                  {c.description}
                </p>
                <Link
                  to={`/shop?collection=${c.id}`}
                  className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-espresso group"
                >
                  <span className="link-underline">Shop the collection</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* By category */}
      <section className="py-20 md:py-28 bg-cream-2 border-t border-line">
        <div className="container-x">
          <div className="mb-10 md:mb-14">
            <p className="eyebrow mb-3">Or by category</p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso" style={{ fontWeight: 400 }}>
              Find <span className="italic">your</span> piece
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {CATEGORY_TILES.map((tile) => (
              <Link
                key={tile.id}
                to={`/shop?category=${tile.id}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-espresso"
              >
                <StockImage
                  imgId={`coll-cat-${tile.id}`}
                  query={`[${tile.textId}] ${tile.imageQuery}`}
                  ratio="3x4"
                  width={800}
                  alt={tile.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-cream">
                  <p className="eyebrow-gold mb-2">{tile.sub}</p>
                  <h3 className="font-serif text-3xl text-cream" style={{ fontWeight: 400 }}>
                    {tile.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
