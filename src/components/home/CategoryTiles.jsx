import { Link } from 'react-router-dom'
import EditorialVisual from '@/components/common/EditorialVisual.jsx'
import { categories } from '@/data/products.js'

const categoryTypes = {
  Earrings: 'earrings',
  Necklaces: 'necklace',
  Huggies: 'huggies',
}

export default function CategoryTiles() {
  return (
    <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-burnished">Shop by category</p>
            <h2 id="category-title" className="mt-3 font-serif text-4xl font-medium text-velmora-espresso md:text-6xl">Find your signature shine</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-cacao/75">Curated categories for building a daily uniform or choosing a meaningful gift.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-champagne text-velmora-ivory">
              <EditorialVisual type={categoryTypes[category.name]} palette="warm" label={`${category.name} jewelry category`} className="absolute inset-0 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/15 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-3 transition duration-300 group-hover:translate-y-0">
                <h3 id={`category-${category.id}-name`} className="font-serif text-4xl font-medium text-velmora-ivory">{category.name}</h3>
                <p id={`category-${category.id}-copy`} className="mt-3 max-w-sm text-sm leading-6 text-velmora-ivory/0 transition duration-300 group-hover:text-velmora-ivory/85">{category.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
