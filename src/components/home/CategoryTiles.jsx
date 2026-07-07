import { Link } from 'react-router-dom'
import ProductImage from '@/components/ProductImage.jsx'
import { categories } from '@/data/products.js'

export default function CategoryTiles() {
  return (
    <section id="collections" className="bg-velmora-ivory px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl leading-none md:text-6xl">Choose your glow</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.name}`}
                className="group relative aspect-[4/5] overflow-hidden bg-velmora-pearl text-velmora-ivory shadow-soft"
              >
                <ProductImage
                  id={category.imageId}
                  query={`[${descId}] [${titleId}]`}
                  ratio="4x3"
                  width="900"
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/10 to-transparent transition group-hover:from-velmora-ink/70" />
                <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-300 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-5xl leading-none">{category.name}</h3>
                  <p id={descId} className="mt-3 max-w-sm text-sm leading-6 text-velmora-pearl opacity-0 transition duration-300 group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
