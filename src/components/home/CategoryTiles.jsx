import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import ProductImage from '@/components/product/ProductImage'

export default function CategoryTiles() {
  return (
    <section id="categories" className="bg-velmora-cream px-5 py-20 text-velmora-ink md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl font-medium md:text-7xl">Choose your glow</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-linen text-velmora-cream shadow-soft">
              <ProductImage imgId={category.imgId} query={`[${category.descId}] [${category.titleId}]`} ratio="3x4" width="900" alt={category.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 transition duration-300 group-hover:-translate-y-2">
                <h3 id={category.titleId} className="font-serif text-5xl font-medium">{category.name}</h3>
                <p id={category.descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-cream/78">{category.description}</p>
                <span className="mt-5 inline-flex border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.2em] text-velmora-cream">Shop now</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
