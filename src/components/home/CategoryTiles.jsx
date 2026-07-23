import { Link } from 'react-router-dom'
import { placeholderSrc } from '@/lib/image-placeholders'

export default function CategoryTiles({ categories }) {
  return (
    <section className="bg-velmora-ivory px-5 py-20 text-velmora-onyx md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-antique">Shop by Category</p>
          <h2 id="category-section-title" className="mt-3 font-serif text-5xl leading-none text-velmora-onyx md:text-6xl">Find your signature shine.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            return (
              <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-champagne text-velmora-ivory shadow-velmora-soft">
                <img
                  alt={category.label}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`category-tile-${category.id}`}
                  data-strk-img={`[${descId}] [${titleId}] [category-section-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src={placeholderSrc}
                />
                <div className="absolute inset-0 bg-velmora-onyx/25 transition group-hover:bg-velmora-onyx/55" />
                <div className="absolute inset-x-6 bottom-6 translate-y-4 transition duration-300 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-4xl text-velmora-ivory">{category.label}</h3>
                  <p id={descId} className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-velmora-mist opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">{category.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
