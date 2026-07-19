import { Link } from 'react-router-dom'
import { categories } from '@/data/products.js'

export default function CategoryTiles() {
  return (
    <section id="collections" className="bg-velmora-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-antique">Shop by category</p>
          <h2 id="category-title" className="mt-3 font-serif text-5xl text-velmora-espresso md:text-6xl">Find your signature glint</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link to={`/shop?category=${category.label}`} key={category.id} className="group relative min-h-96 overflow-hidden bg-velmora-stone shadow-soft">
              <img alt={category.label} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" data-strk-img-id={`category-${category.id}-vlm`} data-strk-img={`[category-${category.id}-desc] [category-${category.id}-label] [category-title]`} data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
              <div className="absolute inset-0 bg-velmora-espresso/25 transition group-hover:bg-velmora-espresso/45" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-porcelain">
                <p id={`category-${category.id}-label`} className="font-serif text-4xl">{category.label}</p>
                <p id={`category-${category.id}-desc`} className="mt-2 max-w-xs text-sm leading-6 opacity-0 transition group-hover:opacity-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
