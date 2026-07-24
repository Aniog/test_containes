import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import StrkImg from '@/components/ui/StrkImg'
import Reveal from '@/components/ui/Reveal'
import { CATEGORY_TILES } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-12 text-center md:mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">Curated for You</p>
          <h2 className="mt-4 font-display text-3xl font-light text-espresso md:text-5xl">
            Shop by Category
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {CATEGORY_TILES.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 100}>
              <Link
                to={`/shop?category=${tile.id}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-sand md:aspect-[3/4]"
              >
                <StrkImg
                  imgId={tile.imgId}
                  query={`[${tile.titleId}] gold jewelry editorial still life`}
                  ratio="3x4"
                  width={800}
                  alt={tile.id}
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-espresso/20 transition-colors duration-500 group-hover:bg-espresso/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3
                    id={tile.titleId}
                    className="font-display text-3xl font-light tracking-wide text-ivory md:text-4xl"
                  >
                    {tile.id}
                  </h3>
                  <span className="mt-3 flex translate-y-2 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-ivory/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-ivory">
                    Shop Now <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
