import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { CATEGORY_TILES } from '@/data/products'
import useStockImages from '@/lib/useStockImages'
import StockImage from '@/components/ui/StockImage'

export default function CategoryTiles() {
  const ref = useRef(null)
  useStockImages(ref, [])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container-x">
        <div className="mb-10 md:mb-14">
          <p className="eyebrow mb-3">Shop the wardrobe</p>
          <h2
            id="cat-title"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso"
            style={{ fontWeight: 400 }}
          >
            By <span className="italic">category</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORY_TILES.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative block aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-espresso"
            >
              <StockImage
                imgId={`cat-${tile.id}`}
                query={`[${tile.textId}] [cat-title] ${tile.imageQuery}`}
                ratio="3x4"
                width={900}
                alt={tile.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent transition-opacity duration-500 group-hover:from-espresso/80" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-cream">
                <p className="eyebrow-gold mb-2">{tile.sub}</p>
                <h3
                  id={tile.textId}
                  className="font-serif text-3xl md:text-4xl text-cream leading-tight"
                  style={{ fontWeight: 400 }}
                >
                  {tile.label}
                </h3>
                <div className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest-2 text-cream/80 group-hover:text-gold-soft transition-colors duration-300">
                  Shop
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
