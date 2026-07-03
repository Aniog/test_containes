import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductImage from '@/components/shared/ProductImage'

const TILES = [
  {
    label: 'Earrings',
    art: 'categoryEarrings',
    to: '/shop?category=earrings',
    sub: 'Huggies, cuffs & drops',
  },
  {
    label: 'Necklaces',
    art: 'categoryNecklaces',
    to: '/shop?category=necklaces',
    sub: 'Pendants & chains',
  },
  {
    label: 'Huggies',
    art: 'categoryHuggies',
    to: '/shop?category=huggies',
    sub: 'The everyday hoop',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-50">
      <div className="container-x">
        <div className="text-center mb-12 lg:mb-16">
          <span className="eyebrow">Shop by category</span>
          <h2 className="mt-3 font-serif text-ink-900 text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.05] text-balance">
            Build your stack.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {TILES.map((t) => (
            <Link
              key={t.label}
              to={t.to}
              className="group relative aspect-[4/5] overflow-hidden bg-ink-900"
            >
              <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-105">
                <ProductImage art={t.art} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-ink-900/0" />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-ivory-50 text-[28px] lg:text-[34px] leading-tight">
                    {t.label}
                  </h3>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.22em] text-ivory-50/75">
                    {t.sub}
                  </p>
                </div>
                <span className="w-10 h-10 rounded-full border border-ivory-50/60 text-ivory-50 flex items-center justify-center group-hover:bg-ivory-50 group-hover:text-ink-900 transition-colors">
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
