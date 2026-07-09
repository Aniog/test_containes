import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl font-medium">Find your signature layer</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${encodeURIComponent(category.title)}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-espresso text-velmora-ivory md:aspect-[3/4]">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                data-strk-bg-id={category.bgId}
                data-strk-bg={`[${category.id}-subtitle] [${category.id}-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-7 transition duration-300 group-hover:translate-y-0">
                <h3 id={`${category.id}-title`} className="font-serif text-4xl text-velmora-ivory">{category.title}</h3>
                <p id={`${category.id}-subtitle`} className="mt-2 max-w-xs text-sm leading-6 text-velmora-champagne opacity-90">{category.subtitle}</p>
                <span className="mt-5 inline-block border-b border-velmora-gold pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory opacity-0 transition group-hover:opacity-100">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
