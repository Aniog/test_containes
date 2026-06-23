import { categories } from '@/data/products'
import { Link } from 'react-router-dom'
import { getStockImageUrl } from '@/lib/stockImageConfig'
import SectionHeading from '@/components/storefront/SectionHeading'

const CategoryTiles = () => {
  return (
    <section id="collections" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Collections"
        title="Shop by category"
        copy="Explore the silhouettes our community returns to for gifting, layering, and everyday polish."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${encodeURIComponent(category.name)}`}
            aria-label={`${category.name}. ${category.blurb}`}
            className="group relative min-h-[20rem] overflow-hidden rounded-[2rem] border border-line bg-bark shadow-float"
          >
            <img
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
              src={getStockImageUrl(category.imageId)}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,7,0.16)_0%,rgba(12,8,7,0.72)_100%)]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 p-6 text-pearl">
              <p className="text-xs uppercase tracking-caps text-sand">Velmora edit</p>
              <h3 className="mt-3 font-serif text-4xl">{category.name}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-pearl/78 opacity-100 transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                {category.blurb}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryTiles
