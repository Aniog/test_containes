import { Link } from 'react-router-dom'
import SectionHeading from '@/components/common/SectionHeading'
import { categoryTiles } from '@/data/products.js?velmora=20260707'

export default function CategorySection() {
  return (
    <section className="container-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Shop by category"
        title="For ears, necklines, and stacked moments"
        description="Explore the categories that define the Velmora wardrobe."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {categoryTiles.map((tile) => {
          const titleId = `category-${tile.id}-title`
          const descId = `category-${tile.id}-desc`
          return (
            <Link key={tile.id} to={`/shop?category=${encodeURIComponent(tile.label)}`} className="group relative overflow-hidden rounded-[2rem] bg-velmora-noir shadow-card">
              <img
                alt={tile.label}
                className="h-[24rem] w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={`${tile.imageId}-home`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src={tile.imageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-noir via-velmora-noir/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
                  <h3 id={titleId} className="font-serif text-3xl transition group-hover:text-velmora-gold">{tile.label}</h3>
                  <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-parchment/80">{tile.description}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-luxe text-velmora-parchment/90">Explore</span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
