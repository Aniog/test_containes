import { Link } from 'react-router-dom'
import ProductMedia from '@/components/products/ProductMedia'
import { categoryTiles } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory py-20 text-velmora-ink sm:py-28">
      <div className="section-shell">
        <div className="mb-10 text-center">
          <p className="eyebrow">Shop by category</p>
          <h2 id="category-section-title" className="serif-title mt-3 text-5xl sm:text-6xl">Find Your Signature</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `category-${tile.id}-title`
            const subtitleId = `category-${tile.id}-subtitle`
            return (
              <Link key={tile.id} to={`/shop?category=${tile.title}`} className="group relative overflow-hidden rounded-[2rem] bg-velmora-ink shadow-soft">
                <ProductMedia
                  alt={`${tile.title} jewelry`}
                  className="aspect-[4/5] h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  imgId={tile.imgId}
                  query={`[${subtitleId}] [${titleId}] [category-section-title]`}
                  ratio="4x3"
                  width="850"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-7 text-velmora-ivory transition duration-300 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-4xl font-semibold">{tile.title}</h3>
                  <p id={subtitleId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-ivory/78 opacity-0 transition duration-300 group-hover:opacity-100">{tile.subtitle}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
